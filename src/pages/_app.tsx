import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const noLayoutPages = ["/login", "/register"];

  const isNoLayoutPage = noLayoutPages.includes(router.pathname);
  return (
    <div>
      {!isNoLayoutPage && <Navbar />}

      <Component {...pageProps} />
      {!isNoLayoutPage && <Footer />}
    </div>
  );
}
