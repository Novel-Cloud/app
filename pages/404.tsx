import Image from "next/image";
import styled from "styled-components";

export default function Page404() {
  return (
    <Page404Wrapper>
      <h1>404</h1>
      <h2>코코니와 나니모 이나이</h2>
      <Image src="/assets/LibraryGirl.png" alt="" width={512} height={512} />
    </Page404Wrapper>
  );
}

const Page404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  h1 {
    font-size: 52px;
    margin: 12px;
  }
`;
