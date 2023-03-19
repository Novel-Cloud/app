import httpClient from "@/apis";
import fixture from "@/fixture";
import KEY from "@/key";
import { Member } from "@/types/user.interface";
import { useQuery } from "@tanstack/react-query";

interface UseAuthUserOptions {
  authorizedPage: boolean;
}

const useAuthUser = (options?: UseAuthUserOptions) => {
  const { data } = useQuery<Member>([KEY.USER], () =>
    httpClient.member.self().then((r) => r.data),
  );
  return { user: data || fixture.userInfo, isLogined: !!data };
};

export default useAuthUser;
