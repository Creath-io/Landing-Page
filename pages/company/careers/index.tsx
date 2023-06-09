import About from "@/components/About";
import Careers from "@/components/Careers";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Careers Page</title>
        <meta name="description" content="Creath" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Careers />
    </>
  );
}
