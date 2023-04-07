import config from "@/config";

export const getFileDownloadUrl = (fileUid: string) => {
  return `${config.baseURL}/api/file/artwork/${fileUid}`;
};

export const getFormData = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return formData;
};
