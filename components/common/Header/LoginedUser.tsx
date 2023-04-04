import Button from "@/components/atoms/Button";
import { Member } from "@/types/user.interface";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./LoginedUser.style";

interface AvatarProps {
  userInfo: Member;
  isLogined: boolean;
}

export default function Avatar({ userInfo, isLogined }: AvatarProps) {
  const router = useRouter();

  return (
    <S.AvatarWrapper>
      {isLogined ? (
        <S.UserInfoWrapper
          onClick={() => router.push(`/profile/${userInfo.memberId}`)}
        >
          <Image
            src={userInfo.picture}
            alt={userInfo.nickname}
            width={40}
            height={40}
          />
          <span>{userInfo.nickname}</span>
        </S.UserInfoWrapper>
      ) : (
        <Button onClick={() => router.push("/login")}>로그인</Button>
      )}
    </S.AvatarWrapper>
  );
}