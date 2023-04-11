import * as S from "./ProfileBackground.style";

export default function ProfileBackground({ length }: { length: number }) {
  return (
    <S.BackgroundWrapper>
      <S.BackgroundInfoWrapper>
        <S.BackgroundInfo>
          {/* <span>팔로워</span> */}
          <span>글 작성 수</span>
          {/* <span>글 좋아요 개수</span> */}
        </S.BackgroundInfo>
        <S.BackgroundInfo>
          {/* <span>100명</span> */}
          <span>{length}개</span>
          {/* <span>10개</span> */}
        </S.BackgroundInfo>
      </S.BackgroundInfoWrapper>
    </S.BackgroundWrapper>
  );
}
