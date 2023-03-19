import httpClient, { HttpClient } from "@/apis/httpClient";
import fixture from "@/fixture";
import KEY from "@/key";
import Storage from "@/storage";
import { Member } from "@/types/user.interface";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface UseAuthUserOptions {
  authorizedPage: boolean;
}

const useAuthUser = (options?: UseAuthUserOptions) => {
  const { data, remove } = useQuery<Member>(
    [KEY.USER],
    () => httpClient.member.self().then((r) => r.data),
    { enabled: !!Storage.getItem("ACCESS_TOKEN") },
  );

  const isLogined = !!data;

  const logout = () => {
    HttpClient.removeAccessToken();
    remove();
  };

  useEffect(() => {
    if (options?.authorizedPage && isLogined) {
      alert("로그인좀 해라");
    }
  }, [options?.authorizedPage, isLogined]);

  return { user: data || fixture.userInfo, isLogined, logout };
};

export default useAuthUser;
