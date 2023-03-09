import Header from "@/components/common/header";
import UserDetailLayout from "@/layout/UserDetailLayout";
import { useRouter } from "next/router";

export default function ArtworkDetailPage() {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <>
      <Header />
      <UserDetailLayout app={<span>{userId}</span>} />
    </>
  );
}
