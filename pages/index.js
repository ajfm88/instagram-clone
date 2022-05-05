import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
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

      <Feed />

      {/* Modal */}
    </div>
  );
}
