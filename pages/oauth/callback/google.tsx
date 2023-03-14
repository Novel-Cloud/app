import useOauth from "@/model/oauth";
import Storage from "@/storage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Google() {
  const router = useRouter();
  const [authCode, setAuthCode] = useState("");
  const { token } = useOauth("google", authCode);

  useEffect(() => {
    setAuthCode(router.query.code as string);
  }, [router.query]);

  useEffect(() => {
    if (token !== "") {
      Storage.setItem("ACCESS_TOKEN", token);
      router.push("/");
    }
  }, [token, router]);

  return <div />;
}
