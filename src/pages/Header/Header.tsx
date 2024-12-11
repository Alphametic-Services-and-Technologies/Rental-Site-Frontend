/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@mui/material";
import "./Header.css";

// Components
import UsageNumbers from "../../components/UsageNumbers/UsageNumbers";
import HouseCard from "../../components/HouseCard/HouseCard";

import HouseBig from "../../assets/properties/house_big.webp";

import Typist from "react-typist-component";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Header() {
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
  return (
    <div className="header-main-container" ref={typistRef}>
      <div className="header-container">
        <motion.div
          className="title-container"
          initial={{ opacity: 0, x: -200 }} // Start from left (negative x-axis)
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }} // End at original position (x: 0)
          transition={{ duration: 1 }}
        >
          {inView ? (
            <Typist>
              <h1>Future of real estate investing</h1>
            </Typist>
          ) : (
            <h1 style={{ opacity: 0 }}>Future of real estate investing</h1>
          )}
          <p className="gray-90">
            Our real estate is virtual property you can purchase on a metaverse
            platform
          </p>
          <Button
            variant="contained"
            size="large"
            sx={{ marginTop: "16px", marginBottom: "16px" }}
          >
            Explore
          </Button>
          <div className="usage-numbers-container">
            <UsageNumbers value={12} title="properties" />
            <UsageNumbers value={10} title="auction" />
            <UsageNumbers value={12} title="developers" />
          </div>
        </motion.div>
        <motion.div
          className="card-main-container"
          initial={{ opacity: 0, x: 200 }} // Start from right (positive x-axis)
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }} // End at original position (x: 0)
          transition={{ duration: 1 }}
        >
          <HouseCard
            imageSrc={HouseBig}
            title="Blue Sky"
            company="@ERA Ukraine Real Estate"
            currentBid={17.31}
            remainingTime={new Date()}
          />
          <HouseCard
            imageSrc={HouseBig}
            title="Blue Sky"
            company="@ERA Ukraine Real Estate"
            currentBid={17.31}
            remainingTime={new Date()}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
