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
  oauth: new HttpClient("/api/oauth", axiosConfig),
  member: new HttpClient("/api/member", axiosConfig),
  shortcut: new HttpClient("/api/shortcut", axiosConfig),
  artwork: new HttpClient("/api/artwork", axiosConfig),
  artworkSave: new HttpClient("/api/artwork/save", axiosConfig),
  artworkDetail: new HttpClient("/api/artwork/detail", axiosConfig),
  tag: new HttpClient("/api/tag", axiosConfig),
  like: new HttpClient("/api/like", axiosConfig),
  comment: new HttpClient("/api/comment", axiosConfig),
  search: new HttpClient("/api/search", axiosConfig),
  memberSelf: new HttpClient("/api/member/self", axiosConfig),
};
