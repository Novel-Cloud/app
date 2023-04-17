import httpClient from "@/apis";
import fixture from "@/fixture";
import KEY from "@/key";
import { Member } from "@/types/user.interface";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useMember = (memberId: number) => {
  const { data } = useQuery<Member>(
    [KEY.MEMBER, memberId],
    () =>
      httpClient.memberProfile
        .getById({ params: { id: memberId } })
        .then((r) => r.data)
        .catch((e) => toast.error(e.response.data.message)),
    {
      enabled: !!memberId,
    },
  );
  return { data: data || fixture.userInfo };
};
