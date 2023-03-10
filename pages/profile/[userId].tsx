import Header from "@/components/common/header";
import ProfileBackground from "@/components/profile/ProfileBackground";
import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfileLayout from "@/layout/ProfileLayout";
import { useRouter } from "next/router";

export default function ArtworkDetailPage() {
  const router = useRouter();
  const { userId } = router.query;
  console.log(userId);

  return (
    <>
      <Header />
      <ProfileLayout background={<ProfileBackground />} app={<ProfileInfo />} />
    </>
  );
}
