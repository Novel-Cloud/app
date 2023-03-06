import { Storage } from "@/storage";
import { getDateParsedData } from "@/utils/date";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export const requestInterceptors = (requestConfig: AxiosRequestConfig) => {
  const accessToken = Storage.getItem("ACCESS_TOKEN");
  if (requestConfig.headers) {
    (requestConfig.headers as any).Token = accessToken;
  }

  const urlParams = requestConfig.url?.split("/:") || [];
  if (urlParams.length < 2) return requestConfig;

  const paramParsedUrl = urlParams
    ?.map((paramKey) => {
      return requestConfig.params[paramKey];
    })
    .join("/");

  urlParams?.forEach((paramKey: string) => {
    delete requestConfig.params[paramKey];
  }, {});

  return {
    ...requestConfig,
    url: paramParsedUrl,
  };
};

export const responseInterceptors = (originalResponse: AxiosResponse) => {
  return {
    ...originalResponse,
    data: getDateParsedData(originalResponse.data),
  };
};
