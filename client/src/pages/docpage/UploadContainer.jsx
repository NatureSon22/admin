import { FaPenNib, FaUpload, FaLink } from "react-icons/fa";
import UploadField from "./UploadField";
import { useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createDocumentRecord,
  getUploadURL,
  uploadFileToURL,
} from "@/service/rag";
import useFolderStore from "@/state/folder";

const UploadContainer = () => {
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const queryClient = useQueryClient();
  const folder = useFolderStore((state) => state.folder);
  const [loading, setLoading] = useState(false);

  // write document
  // upload document
  const { mutate: handleGetUploadURL } = useMutation({
    mutationFn: () => getUploadURL(file.name, file.type),
    onSuccess: ({ key, url }) => {
      handleUploadToURL({ key, url });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate: handleUploadToURL } = useMutation({
    mutationFn: ({ key, url }) => uploadFileToURL(url, key, file.type, file),
    onSuccess: (data) => {
      const { key } = data;
      handleSaveFileRecord(key);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate: handleSaveFileRecord } = useMutation({
    mutationFn: (key) => createDocumentRecord(folder.id, key),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [],
      });
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      setLoading(false);
    },
  });
  // import from web

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      handleGetUploadURL();
      setLoading(true);
    }
  };

  const handleUpload = () => {
    fileRef.current.click();
  };

  return (
    <div className="max-w-[75em] space-y-7">
      <div className="flex gap-10">
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          ref={fileRef}
        />

        <UploadField
          icon={<FaPenNib className="text-[2rem] text-base-300" />}
          mainLabel="Write"
          subLabel="Write or copy-paste your document"
          handleUpload={() => {}}
        />

        <UploadField
          icon={<FaUpload className="text-[2rem] text-base-300" />}
          mainLabel="Upload"
          subLabel="Upload PDF, Word, or PowerPoint files"
          handleUpload={handleUpload}
        />

        <UploadField
          icon={<FaLink className="text-[2rem] text-base-300" />}
          mainLabel="Import"
          subLabel="Import website with text content"
          handleUpload={() => {}}
        />
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default UploadContainer;
