import React from "react";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebaseConfig";

function Slider() {
  const [slider, setSlider] = useState("");

  useEffect(() => {
    const colRef = collection(database, "slider");
    getDocs(colRef).then((snapshot) => {
      console.log(snapshot.docs);
      let slider = [];
      snapshot.docs.forEach((doc) => {
        slider.push({ ...doc.data(), id: doc.id });
      });
      console.log(slider[0].imgs);
      setSlider(slider);
    });
  }, []);

  return (
    <div className="flex flex-row h-[52] md:h-full w-full ">
      {slider &&
        slider.map((doc) => (
          <div key={doc.id}>
            <Carousel
              autoplay
              wrapAround
              adaptiveHeight
              withoutControls
              className=""
              key=""
            >
              {doc.imgs.map((url, i) => (
                <Image
                  key={i}
                  width={1300}
                  height={100}
                  src={url}
                  alt=""
                  className="rounded px-0.5 w-full h-[52]"
                />
              ))}
            </Carousel>
          </div>
        ))}
    </div>
  );
}

export default Slider;
