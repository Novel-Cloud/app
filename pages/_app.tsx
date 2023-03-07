import React from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyle from "@/styles/globalStyle";
import UserStyle from "@/styles/userStyle";
import Header from "@/components/common/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UserStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
