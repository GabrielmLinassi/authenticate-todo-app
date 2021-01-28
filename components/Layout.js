import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 py-10 h-full">
      <div className="container bg-white dark:bg-gray-400 p-5 rounded-md shadow-lg mx-auto max-w-xl">
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
      </div>
    </div>
  );
}
