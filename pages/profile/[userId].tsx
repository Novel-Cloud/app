import Header from "@/components/common/header";
import ProfileBackground from "@/components/profile/ProfileBackground";
import ProfileInfo from "@/components/profile/ProfileInfo";
import useAuthUser from "@/hooks/useAuthUser";
import ProfileLayout from "@/layout/ProfileLayout";
import { useRouter } from "next/router";

export default function ArtworkDetailPage() {
  const router = useRouter();
  const { userId } = router.query;
  const { data: userInfo } = useAuthUser();

  return (
    <>
      <Header />
      <ProfileLayout
        background={<ProfileBackground />}
        app={<ProfileInfo userInfo={userInfo} />}
      />
    </>
  );
}
