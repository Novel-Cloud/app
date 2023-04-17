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
        .catch((e) => toast.error(e.response.data.message)),
    { enabled: !!Storage.getItem("ACCESS_TOKEN") },
  );

  const logout = () => {
    HttpClient.removeAccessToken();
    remove();
  };

  useEffect(() => {
    if (options?.authorizedPage && !data && !isLoading) {
      alert("로그인좀 해라");
      router.push("/");
    }
  }, [options?.authorizedPage, data, isLoading, router]);

  return { user: data || fixture.userInfo, isLogined: !!data, logout };
};

export default useAuthUser;
