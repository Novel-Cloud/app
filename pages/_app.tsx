import React from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyle from "@/styles/globalStyle";
import UserStyle from "@/styles/userStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UserStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
