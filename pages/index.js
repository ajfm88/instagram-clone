import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram Clone</title>
        <meta
          name="Instagram social media app clone"
          content="An Instagram clone created using Next.js, TailWindCSS and Google Firebase"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <Header />

      {/* Feed */}

      {/* Modal */}
    </div>
  );
}
