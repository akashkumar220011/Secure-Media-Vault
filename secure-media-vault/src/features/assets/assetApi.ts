import API from "../../api/api";

export const uploadAsset = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await API.post("/assets/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};
