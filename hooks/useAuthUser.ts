import httpClient, { HttpClient } from "@/apis/httpClient";
import fixture from "@/fixture";
import KEY from "@/key";
import Storage from "@/storage";
import { Member } from "@/types/user.interface";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface UseAuthUserOptions {
  authorizedPage: boolean;
}

const useAuthUser = (options?: UseAuthUserOptions) => {
  const router = useRouter();
  const { data, remove, isLoading } = useQuery<Member>(
    [KEY.USER],
    () =>
      httpClient.member
        .self()
        .then((r) => r.data)
        .catch((e) => {
          if (e.response.data.message === "유효기간이 만료된 토큰입니다.")
            httpClient.oauth
              .refresh({
                refreshToken: Storage.getItem("REFRESH_TOKEN") || "",
              })
              .then((r) => {
                const { accessToken } = r.data;
                Storage.setItem("ACCESS_TOKEN", accessToken);
                HttpClient.setAccessToken();
                router.reload();
              });
        }),
    { enabled: !!Storage.getItem("ACCESS_TOKEN") },
  );

  const logout = () => {
    HttpClient.removeAccessToken();
    remove();
  };

  useEffect(() => {
    if (options?.authorizedPage && !data && !isLoading) {
      toast.error("로그인이 필요한 페이지입니다.");
      router.push("/");
    }
  }, [options?.authorizedPage, data, isLoading, router]);

  return { user: data || fixture.userInfo, isLogined: !!data, logout };
};

export default useAuthUser;
