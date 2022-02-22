import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { carouselData } from "../constants/carousel";

export default function Hero() {
  return (
    <Carousel showStatus={false} showThumbs={false}>
      {carouselData.map((slide, index) => {
        return (
          <div key={index} className="px-5">
            <img src={slide.image} alt="slide" />
          </div>
        );
      })}
    </Carousel>
  );
}
