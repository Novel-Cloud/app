import useOauth from "@/model/oauth";
import Storage from "@/storage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Google() {
  const router = useRouter();
  const [authCode, setAuthCode] = useState("");
  const { accessToken } = useOauth(authCode);

  useEffect(() => {
    setAuthCode(router.query.code as string);
  }, [router.query]);

  useEffect(() => {
    if (accessToken !== "") {
      Storage.setItem("ACCESS_TOKEN", accessToken);
      router.push("/");
    }
  }, [accessToken, router]);

  return <div />;
}
