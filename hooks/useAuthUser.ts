import httpClient, { HttpClient } from "@/apis/httpClient";
import fixture from "@/fixture";
import KEY from "@/key";
import Storage from "@/storage";
import type { Member } from "@/types/user.interface";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface UseAuthUserOptions {
  authorizedPage: boolean;
}

const useAuthUser = (options?: UseAuthUserOptions) => {
  const router = useRouter();

  const getUserData = async () => {
    try {
      const { data } = await httpClient.member.self();
      return data;
    } catch (e) {
      const statusCode = (e as AxiosError).response?.status;

      switch (statusCode) {
        case 401: {
          const {
            data: { accessToken },
          } = await httpClient.oauth.refresh({
            refreshToken: Storage.getItem("REFRESH_TOKEN"),
          });
          Storage.setItem("ACCESS_TOKEN", accessToken);
          HttpClient.setAccessToken();
          await getUserData();
          break;
        }
        default: {
          break;
        }
      }
    }
  };

  const { data, remove, isLoading } = useQuery<Member>(
    [KEY.USER],
    getUserData,
    { enabled: !!Storage.getItem("ACCESS_TOKEN") },
  );

  const logout = () => {
    HttpClient.removeAccessToken();
    remove();
  };

  useEffect(() => {
    if (options?.authorizedPage && !data && !isLoading) {
      toast.error("로그인이 필요한 페이지입니다.");
      router.push("/login");
    }
  }, [options?.authorizedPage, data, isLoading, router]);

  return { user: data || fixture.userInfo, isLogined: !!data, logout };
};

export default useAuthUser;
