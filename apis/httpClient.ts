import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import config from "@/config";
import { requestInterceptors, responseInterceptors } from "@/utils/api";
import Storage from "@/storage";

export interface HttpClientConfig {
  baseURL?: string;
  timeout?: number;
  headers?: { Token?: string };
}

export class HttpClient {
  private api: AxiosInstance;

  private static clientConfig: HttpClientConfig;

  constructor(url: string, axiosConfig: HttpClientConfig) {
    this.api = axios.create({
      ...axiosConfig,
      baseURL: `${axiosConfig.baseURL}${url}`,
    });
    HttpClient.clientConfig = { headers: { Token: "" } };
    this.setting();
  }

  get(requestConfig?: AxiosRequestConfig) {
    return this.api.get("", { ...HttpClient.clientConfig, ...requestConfig });
  }

  getById(requestConfig?: AxiosRequestConfig) {
    return this.api.get("/:id", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  post(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.post("", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  upload(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.post("/upload", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  refresh(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.post("/refresh", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  put(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.put("", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  image(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.put("/image", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  nickname(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.put("/nickname", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  delete(requestConfig?: AxiosRequestConfig) {
    return this.api.delete("", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  self(requestConfig?: AxiosRequestConfig) {
    return this.api.get("/self", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  view(requestConfig?: AxiosRequestConfig) {
    return this.api.get("/view", {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  sequence(data: unknown, requestConfig?: AxiosRequestConfig) {
    return this.api.put("/sequence", data, {
      ...HttpClient.clientConfig,
      ...requestConfig,
    });
  }

  private setting() {
    HttpClient.setCommonInterceptors(this.api);
  }

  static setAccessToken() {
    const accessToken = Storage.getItem("ACCESS_TOKEN");
    HttpClient.clientConfig.headers = {
      ...HttpClient.clientConfig.headers,
      Token: accessToken || undefined,
    };
  }

  static removeAccessToken() {
    Storage.setItem("ACCESS_TOKEN", "");
  }

  private static setCommonInterceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(requestInterceptors as any);
    instance.interceptors.response.use(responseInterceptors);
  }
}

const axiosConfig: HttpClientConfig = {
  baseURL: config.baseURL,
  timeout: 10000,
};

export default {
  oauth: new HttpClient("/api/v1/oauth", axiosConfig),
  member: new HttpClient("/api/v1/member", axiosConfig),
  shortcut: new HttpClient("/api/v1/shortcut", axiosConfig),
  artwork: new HttpClient("/api/v1/artwork", axiosConfig),
  artworkSave: new HttpClient("/api/v1/artwork/save", axiosConfig),
  artworkDetail: new HttpClient("/api/v1/artwork/detail", axiosConfig),
  tag: new HttpClient("/api/v1/tag", axiosConfig),
  like: new HttpClient("/api/v1/like", axiosConfig),
  file: new HttpClient("/api/v1/file", axiosConfig),
  comment: new HttpClient("/api/v1/comment", axiosConfig),
  search: new HttpClient("/api/v1/search", axiosConfig),
  memberSelf: new HttpClient("/api/v1/member/self", axiosConfig),
  artworkView: new HttpClient("/api/v1/artwork/view", axiosConfig),
  memberProfile: new HttpClient("/api/v1/member/profile", axiosConfig),
};
