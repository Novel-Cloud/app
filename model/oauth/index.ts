import { useQuery } from "@tanstack/react-query";
import httpClient from "@/apis";
import KEY from "@/key";
import type { Token } from "@/types/user.interface";
import { toast } from "react-toastify";

const useOauth = (authCode: string) => {
  const { data } = useQuery<Token>(
    [KEY.OAUTH, authCode],
    () =>
      httpClient.oauth
        .post({ code: authCode })
        .then((r) => r.data)
        .catch((e) => toast.error(e.response.data.message)),
    {
      enabled: !!authCode,
    },
  );
  return data || { accessToken: "", validity: "", refreshToken: "" };
};

export default useOauth;
