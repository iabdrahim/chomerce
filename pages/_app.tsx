import "styles/globals.scss";

import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import CartProvider from "../context/cart";
import "highlight.js/styles/night-owl.css";
import "easymde/dist/easymde.min.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import "moment/locale/ar";
import Layout from "../components/layout";
import NextProgress from "next-progress";

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      delay: 0.25,
    },
  },
  out: {
    opacity: 0,
    scale: 1,
    y: 40,
    transition: {
      duration: 0.25,
    },
  },
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { asPath } = useRouter();

  return (
    <>
      <SessionProvider session={session}>
        <CartProvider>
          <Layout>
            <AnimatePresence
              initial={false}
              mode="wait"
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <NextProgress color={"#00000"} options={{ showSpinner: false }} />
              <motion.div
                key={asPath}
                className="minHeightContainer"
                variants={variants}
                animate="in"
                initial="out"
                exit="out"
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </Layout>
        </CartProvider>
      </SessionProvider>
    </>
  );
}
