import { useQuery } from "@tanstack/react-query";
import httpClient from "@/apis";
import KEY from "@/key";
import { Token } from "@/types/user.interface";

const useOauth = (authCode: string) => {
  const { data } = useQuery<Token>(
    [KEY.OAUTH, authCode],
    () => httpClient.oauth.post({ code: authCode }).then((r) => r.data),
    {
      enabled: !!authCode,
    },
  );
  return data || { token: "", validity: "" };
};

export default useOauth;
