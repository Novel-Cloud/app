import config from "@/config";

export const getFileDownloadUrl = (fileUid: string) => {
  return `${config.baseURL}/api/file/artwork/${fileUid}`;
};

export const getFormData = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return formData;
};

export const checkSize = (fileSize: number, maxSize?: number) => {
  const checkFileSize = maxSize || 1 * 1024 * 1024;
  if (fileSize > checkFileSize) return false;
  return true;
};

export const base64ToBlob = async (base64String: string) => {
  const base64Response = await fetch(base64String);
  const blob = await base64Response.blob();
  return blob;
};
