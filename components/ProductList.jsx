/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../firebaseConfig";

function ProductList() {
  const [docs, setDocs] = useState("");

  useEffect(() => {
    const colRef = collection(database, "products");
    getDocs(colRef).then((snapshot) => {
      let products = [];
      snapshot.docs.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });
      setDocs(products);
    });
  }, []);

  return (
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-2 gap-2 md:gap-3">
          {docs &&
            docs.map((doc) => (
              <Link
                key=""
                href="/"
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
              </Link>
            ))}
        </div>
  );
}

export default ProductList;
