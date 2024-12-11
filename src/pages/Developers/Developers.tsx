/* eslint-disable react-hooks/exhaustive-deps */
import "./Developers.css";

import { Chip, Avatar } from "@mui/material";

import { developersList1, developersList2 } from "./DevelopersList";
import { useEffect, useRef, useState } from "react";
import Typist from "react-typist-component";
import { motion } from "framer-motion";

function Developers() {
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
    <div className="developers-main-container">
      <div className="developers-container" ref={typistRef}>
        {inView ? (
          <Typist>
            <h1>Our the best developers</h1>
          </Typist>
        ) : (
          <h1 style={{ opacity: 0 }}>Our the best developers</h1>
        )}

        <p className="gray-50">
          The value of real estate can be affected by its utility, project, and
          demand.
        </p>
        <motion.div
          className="developers-list-container"
          initial={{ opacity: 0, x: -200 }} // Start from left (negative x-axis)
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }} // End at original position (x: 0)
          transition={{ duration: 1 }}
        >
          {developersList1.map((dev, index) => (
            <Chip
              key={index}
              avatar={
                <Avatar
                  alt={dev.title}
                  src={dev.src}
                  className="developer-item-avatar"
                />
              }
              label={dev.title}
              variant="outlined"
              className="developer-item"
            />
          ))}
        </motion.div>
        <motion.div
          className="developers-list-container"
          initial={{ opacity: 0, x: 200 }} // Start from right (positive x-axis)
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }} // End at original position (x: 0)
          transition={{ duration: 1 }}
        >
          {developersList2.map((dev, index) => (
            <Chip
              key={index}
              avatar={
                <Avatar
                  alt={dev.title}
                  src={dev.src}
                  className="developer-item-avatar"
                />
              }
              label={dev.title}
              variant="outlined"
              className="developer-item"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Developers;
