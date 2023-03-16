import httpClient from "@/apis";
import { HttpClient } from "@/apis/httpClient";
import fixture from "@/fixture";
import KEY from "@/key";
import Storage from "@/storage";
import { Member } from "@/types/user.interface";
import { useQuery } from "@tanstack/react-query";

interface UseAuthUserOptions {
  authorizedPage: boolean;
}

const useAuthUser = (options?: UseAuthUserOptions) => {
  const { data, refetch } = useQuery<Member>([KEY.USER], () =>
    httpClient.member
      .self()
      .then((r) => r.data)
      .catch((error) => {
        if (error.response.data.status === 401) {
          httpClient.oauth.token().then((r) => {
            Storage.setItem("ACCESS_TOKEN", r.data.token);
          });
          refetch();
        }
      }),
  );
  return { data: data || fixture.userInfo };
};

export default useAuthUser;
