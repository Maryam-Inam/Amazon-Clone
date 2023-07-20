import Head from "next/head";
import { getSession } from "next-auth/react";
import Header from "../components/header/Header";
import Login from "../components/Login";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
export default function Home({ user, products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main>
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  //get the user
  const session = await getSession(context);
  const sess = session;
  const user = sess && sess.user;
  console.log("ok", user);

  const response = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
  const products = response.products;
  return {
    props: {
      products,
      user,
    },
  };
}
