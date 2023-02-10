import "../styles/globals.css";
import type { AppProps } from "next/app";
import AlertProvider from "../components/alert/AlertProvider";
import AlertDialog from "../components/alert/AlertDialog";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // 👇 we should be able to specficy the AlertDialog we want to use
    // whether it's implemented using @headlessui + tailwind or MUI or bootstrap
    <AlertProvider AlertComponent={AlertDialog}>
      <Component {...pageProps} />
    </AlertProvider>
  );
}
export default MyApp;
