import "~/styles/globals.css";
import { Montserrat } from "next/font/google";
import { type AppType } from "next/dist/shared/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>{" "}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
