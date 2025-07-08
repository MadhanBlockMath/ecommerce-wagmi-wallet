"use client";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { WishlistProvider } from "../../services/whishlistcontext";

import { WagmiConfig } from "wagmi";
import { config } from "../../wagmiConfig";

// ✅ TanStack Query setup
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create query client instance
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <WishlistProvider>
          <Head>
            <title>Meta-shopping</title>
          </Head>
          <Component {...pageProps} />
        </WishlistProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
}
