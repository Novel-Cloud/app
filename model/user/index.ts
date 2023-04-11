import httpClient from "@/apis";
import fixture from "@/fixture";
import KEY from "@/key";
import { Member } from "@/types/user.interface";
import { useQuery } from "@tanstack/react-query";

export const useMember = (memberId: number) => {
  const { data } = useQuery<Member>(
    [KEY.MEMBER, memberId],
    () =>
      httpClient.memberProfile
        .getById({ params: { id: memberId } })
        .then((r) => r.data),
    {
      enabled: !!memberId,
    },
  );
  return { data: data || fixture.userInfo };
};
