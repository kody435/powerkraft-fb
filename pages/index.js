/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>POWERKRAFT | Home</title>
        <meta
          name="description"
          content="POWERKRAFT is a leading manufacturer of Table Tennis equiments."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="w-full m-0 p-0 ">
        <Slider />
        <ProductList />
      </main>
    </>
  );
}
