import { useEffect, useState } from "react";
import PanelLayout from "../layouts/PanelLayout";
import folders from "../../dummy/campus-folder";
import CampusFolder from "./CampusFolder";
import { useQuery } from "@tanstack/react-query";
import { listFolders } from "@/service/rag";

const CampusFolders = () => {
  // query for folders
  // campuses are automatically
  const { data } = useQuery({
    queryKey: ["folders"],
    queryFn: listFolders,
  });
  const [campusFolders, setCampusFolders] = useState([]);

  useEffect(() => {
    if (data) {
      setCampusFolders(data);
    }
  }, [data]);

  return (
    <PanelLayout>
      <div>
        <p className=" font-semibold text-[1.2rem] text-base-300">
          Campus Documents
        </p>
        <p className="text-[0.85rem] text-secondary-100">
          This section lists the most recent documents uploaded to the system.
          You can review, edit, or manage these files to ensure they are
          properly prepared for use.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-x-10 gap-y-7">
        {campusFolders.map((folder, index) => (
          <CampusFolder key={index} folder={folder} />
        ))}
      </div>
    </PanelLayout>
  );
};

export default CampusFolders;
