import "../styles/globals.css";
import type { AppProps } from "next/app";
import AlertProvider from "../components/alert/AlertProvider";
import AlertDialog from "../components/alert/AlertDialog";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider AlertComponent={AlertDialog}>
      <Component {...pageProps} />
    </AlertProvider>
  );
}

export default MyApp;
