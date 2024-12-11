/* eslint-disable react-hooks/exhaustive-deps */
import "./AboutUs.css";

import { Button } from "@mui/material";

import Ukraine from "../../assets/countries/bohdan-d-fh6o-XkVQG8-unsplash.webp";
import Norway from "../../assets/countries/john-o-nolan-6f_ANCcbj3o-unsplash.webp";
import Portugal from "../../assets/countries/julia-solonina-ci19YINguoc-unsplash.webp";
import Brazil from "../../assets/countries/theater-amazonas-manaus.webp";
import { useEffect, useRef, useState } from "react";
import Typist from "react-typist-component";

import { motion } from "framer-motion";

function AboutUs() {
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
    <div className="about-us-main-container">
      <div className="about-us-container">
        <motion.div
          className="about-us-first-section"
          ref={typistRef}
          initial={{ opacity: 0, x: -200 }} // Start from left (negative x-axis)
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }} // End at original position (x: 0)
          transition={{ duration: 1 }}
        >
          {inView ? (
            <Typist>
              <h1>What is Renting-Platform?</h1>
            </Typist>
          ) : (
            <h1 style={{ opacity: 0 }}>What is Renting-Platform?</h1>
          )}

          <p className="gray-50">
            As new technologies like cryptocurrency develop, the real estate
            sector is changing drastically. It is important to understand both
            how these technologies and the traditional real estate market work.
            Governments are unable to comprehend the rapid advancement of
            technology and modify their legal frameworks to accommodate it fast
            enough.
          </p>
          <Button variant="contained">Read More</Button>
        </motion.div>
        <motion.div
          className="about-us-second-section"
          initial={{ opacity: 0, x: 200 }} // Start from right (positive x-axis)
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }} // End at original position (x: 0)
          transition={{ duration: 1 }}
        >
          <div className="images-container">
            <div className="image-container">
              <img src={Ukraine} alt="Ukraine" width={150} />
            </div>
            <div className="image-container">
              <img src={Norway} alt="Norway" width={230} />
            </div>
          </div>
          <div className="images-container">
            <div className="image-container">
              <img src={Portugal} alt="Portugal" width={230} />
            </div>
            <div className="image-container">
              <img src={Brazil} alt="Brazil" width={150} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
