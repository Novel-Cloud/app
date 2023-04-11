import Header from "@/components/common/Header";
import ProfileBackground from "@/components/profile/ProfileBackground";
import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfileLayout from "@/layout/ProfileLayout";
import { useMember } from "@/model/user";
import { useRouter } from "next/router";

export default function ArtworkDetailPage() {
  const router = useRouter();
  const { userId } = router.query;
  const { data: userInfo } = useMember(Number(userId));
  const isMypage = Number(userId) === userInfo.memberId;

  return (
    <>
      <Header />
      <ProfileLayout
        background={<ProfileBackground length={userInfo.artworks.length} />}
        app={<ProfileInfo userInfo={userInfo} isMypage={isMypage} />}
      />
    </>
  );
}
