/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import Head from "next/head";

function ProductList() {
  const [eva, setEva] = useState("");
  const [alu, setAlu] = useState("");
  const [blade, setBlade] = useState("");

  useEffect(() => {
    const colRef1 = collection(database, "products");
    const q1 = query(colRef1, where("cat", "==", "eva"));
    getDocs(q1).then((snapshot) => {
      let products = [];
      snapshot.docs.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });
      setEva(products);
    });

    const colRef2 = collection(database, "products");
    const q2 = query(colRef2, where("cat", "==", "alu"));
    getDocs(q2).then((snapshot) => {
      let products = [];
      snapshot.docs.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });
      setAlu(products);
    });

    const colRef3 = collection(database, "products");
    const q3 = query(colRef3, where("cat", "==", "blade"));
    getDocs(q3).then((snapshot) => {
      let products = [];
      snapshot.docs.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });
      setBlade(products);
    });
  }, []);

  const Evas = (
    <div>
      <div className="mx-2 flex flex-row items-center justify-between ">
        <h2 className="text-xl lg:text-2xl font-medium ">EVA Case</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 m-2 gap-2 md:gap-3">
        {eva &&
          eva.map((doc) => (
            <div
              key=""
              href={`/products/${doc.slug}`}
              className="shadow-lg ease-in-out delay-150 duration-300 hover:-translate-1 translate hover:scale-105 flex flex-col"
            >
              <br />
              <Image
                src={doc.img}
                alt=""
                className="w-full rounded p-3"
                width={500}
                height={500}
              />

              <div className="my-3 ml-4 justify-end items-end">
                <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 prose">
                  {doc.title}
                </h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  const Aluminium = (
    <section id="alu">
      <div className="mx-2 flex flex-row items-center justify-between ">
        <h2 className="text-xl lg:text-2xl font-medium ">ALUMINIUM Case</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 m-2 gap-2 md:gap-3">
        {alu &&
          alu.map((doc) => (
            <div
              key=""
              href={`/products/${doc.slug}`}
              className="shadow-lg ease-in-out delay-150 duration-300 hover:-translate-1 translate hover:scale-105 flex flex-col"
            >
              <br />
              <Image
                src={doc.img}
                alt=""
                className="w-full rounded p-3"
                width={500}
                height={500}
              />

              <div className="my-3 ml-4 justify-end items-end">
                <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  {doc.title}
                </h3>
              </div>
            </div>
          ))}
      </div>
    </section>
  );

  const Blades = (
    <section id="alu">
      <div className="mx-2 flex flex-row items-center justify-between ">
        <h2 className="text-xl lg:text-2xl font-medium ">Blades</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 m-2 gap-2 md:gap-3">
        {blade &&
          blade.map((doc) => (
            <div
              key=""
              href={`/products/${doc.slug}`}
              className="shadow-lg ease-in-out delay-150 duration-300 hover:-translate-1 translate hover:scale-105 flex flex-col"
            >
              <br />
              <Image
                src={doc.img}
                alt=""
                className="w-full rounded p-3"
                width={500}
                height={500}
              />

              <div className="my-3 ml-4 justify-end items-end">
                <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  {doc.title}
                </h3>
              </div>
            </div>
          ))}
      </div>
    </section>
  );

  return (
    <div className="gap-16 flex flex-col my-5 lg:my-10 xl:my-15">
      <Head>
        <title>POWERKRAFT | Categories</title>
      </Head>
      {Blades}
      {Evas}
      {Aluminium}

    </div>
  );
}

export default ProductList;
