import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full w-full bg-isabelline text-smoky">
      <div className="h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
