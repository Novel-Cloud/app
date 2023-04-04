import React from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyle from "@/styles/globalStyle";
import UserStyle from "@/styles/userStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import config from "@/config";
import Modal from "@/components/common/Modal";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={client}>
          {config.nodeEnv === "development" && <ReactQueryDevtools />}
          <GlobalStyle />
          <UserStyle />
          <Modal />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}
