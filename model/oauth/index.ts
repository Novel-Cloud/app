import { useQuery } from "@tanstack/react-query";
import httpClient from "@/apis";
import KEY from "@/key";
import { Token } from "@/types/user.interface";

const useOauth = (platform: "google", authCode: string) => {
  const { data } = useQuery<Token>(
    [KEY.OAUTH, authCode],
    () =>
      httpClient.oauth
        .post({ code: authCode, clientType: platform.toUpperCase() })
        .then((r) => r.data),
    {
      enabled: !!authCode,
    },
  );
  return data || { token: "", validity: "" };
};

export default useOauth;
