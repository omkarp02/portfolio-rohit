import Layout from "@/component/layout/mainlayout";
import "@/styles/bootstrap.scss";
import "@/styles/globals.scss";
import { useEffect, useState } from "react";
import PreLoader from '@/component/customComponent/preLoader'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
