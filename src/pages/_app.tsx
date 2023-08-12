import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Inter, Outfit } from "next/font/google";

export const outFit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main className={outFit.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
