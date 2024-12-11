/* eslint-disable react-hooks/exhaustive-deps */
import "./Properties.css";
import { useEffect, useRef, useState } from "react";

import { Button } from "@mui/material";

import Slider from "react-slick";

import { HouseCardsData } from "./ListOfProperties";
import HouseCard from "../../components/HouseCard/HouseCard";

import Typist from "react-typist-component";

function Properties() {
  const [selectedButton, setSelectedButton] = useState<
    "All" | "Cottage" | "Chalet" | "Manor" | "Penthouse" | "Farmhouse"
  >("All");
  const [restartKey, setRestartKey] = useState(false);
  const [inView, setInView] = useState(false);
  const typistRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Restart the Typist component when it enters the viewport
          setRestartKey(!restartKey);
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0 } // Adjust threshold as needed
    );

    if (typistRef.current) {
      observer.observe(typistRef.current);
    }

    return () => {
      if (typistRef.current) {
        observer.unobserve(typistRef.current);
      }
    };
  }, []);

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Medium devices (tablets)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="properties-main-container">
      <div className="properties-container" ref={typistRef}>
        {inView ? (
          <Typist>
            <h1>Discover more properties</h1>
          </Typist>
        ) : (
          <h1 style={{ opacity: 0 }}>Discover more properties</h1>
        )}
        <div className="button-container">
          <Button
            variant="contained"
            className={selectedButton === "All" ? "" : "button"}
            onClick={() => setSelectedButton("All")}
            size="large"
          >
            All
          </Button>
          <Button
            variant="contained"
            className={selectedButton === "Cottage" ? "" : "button"}
            onClick={() => setSelectedButton("Cottage")}
          >
            Cottage
          </Button>
          <Button
            variant="contained"
            className={selectedButton === "Chalet" ? "" : "button"}
            onClick={() => setSelectedButton("Chalet")}
          >
            Chalet
          </Button>
          <Button
            variant="contained"
            className={selectedButton === "Manor" ? "" : "button"}
            onClick={() => setSelectedButton("Manor")}
          >
            Manor
          </Button>
          <Button
            variant="contained"
            className={selectedButton === "Penthouse" ? "" : "button"}
            onClick={() => setSelectedButton("Penthouse")}
          >
            Penthouse
          </Button>
          <Button
            variant="contained"
            className={selectedButton === "Farmhouse" ? "" : "button"}
            onClick={() => setSelectedButton("Farmhouse")}
          >
            Farmhouse
          </Button>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {HouseCardsData.map((data, index) => (
              <div style={{ width: "100%" }}>
                <HouseCard
                  key={index}
                  imageSrc={data.imageSrc}
                  company={data.company}
                  title={data.title}
                  currentBid={data.currentBid}
                  remainingTime={data.remainingTime}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Properties;
