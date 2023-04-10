import Header from "@/components/common/Header";
import { ReactNode } from "react";
import styled from "styled-components";

interface ProfileEditLayoutProps {
  app: ReactNode;
}

function Frame({ app }: ProfileEditLayoutProps) {
  return <ProfileEditLayoutWrapper>{app}</ProfileEditLayoutWrapper>;
}

export default function ProfileEditLayout(props: ProfileEditLayoutProps) {
  return (
    <>
      <Header />
      <Frame {...props} />
    </>
  );
}

const ProfileEditLayoutWrapper = styled.div``;
