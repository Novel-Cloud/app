import { createGlobalStyle } from "styled-components";

const UserStyle = createGlobalStyle` 
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

html {
  font-family: 'Pretendard-Regular';
}
`;

export default UserStyle;
