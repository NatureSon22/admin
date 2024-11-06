const RAG_URLS = (id = null) => {
  return {
    LIST_FOLDER: "https://getcody.ai/api/v1/folders",
    UPLOAD_DOCUMENT: "https://getcody.ai/api/v1/uploads/signed-url",
    CREATE_DOCUMENT_FROM_FILE: "https://getcody.ai/api/v1/documents/file",
    LIST_DOCUMENT: `https://getcody.ai/api/v1/documents?folder_id=${id}`,
  };
};

const HEADERS = {
  Authorization: `Bearer ${import.meta.env.VITE_CODY_KEY}`,
  "Content-Type": "application/json",
};

const listFolders = async () => {
  const response = await fetch(RAG_URLS().LIST_FOLDER, {
    method: "GET",
    headers: HEADERS,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch folders`);
  }

  const { data } = await response.json();
  return data;
};

const createFolder = async (name) => {
  if (!name) {
    throw new Error("Folder name is required");
  }

  const response = await fetch("https://getcody.ai/api/v1/folders", {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({ name: name }),
  });

  if (!response.ok) {
    throw new Error("Failed to create folder");
  }
};

const getUploadURL = async (file_name, content_type) => {
  console.log(file_name, content_type);
  const response = await fetch(RAG_URLS().UPLOAD_DOCUMENT, {
    method: "POST",
    headers: {
      ...HEADERS,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ file_name, content_type }),
  });

  if (!response.ok) {
    throw new Error("Failed to get upload URL");
  }
  const {
    data: { key, url },
  } = await response.json();
  return { key, url };
};

const uploadFileToURL = async (url, key, content_type, file) => {
  console.log(url, key, content_type, file);

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": content_type,
    },
    body: file,
  });

  if (!response.ok) {
    throw new Error("Failed to upload file to URL");
  }

  return { key };
};

const createDocumentRecord = async (id, key) => {
  const response = await fetch(RAG_URLS().CREATE_DOCUMENT_FROM_FILE, {
    method: "POST",
    headers: {
      ...HEADERS,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key, folder_id: id }),
  });

  if (!response.ok) {
    throw new Error("Failed to create document record");
  }

  const { data } = await response.json();
  return data;
};

const listDocuments = async (folder_id) => {
  const response = await fetch(RAG_URLS(folder_id).LIST_DOCUMENT, {
    method: "GET",
    headers: HEADERS,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch folders`);
  }

  const { data } = await response.json();
  return data;
};

export {
  listFolders,
  createFolder,
  getUploadURL,
  uploadFileToURL,
  createDocumentRecord,
  listDocuments,
};
