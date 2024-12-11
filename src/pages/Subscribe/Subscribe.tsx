/* eslint-disable react-hooks/exhaustive-deps */
import "./Subscribe.css";

import Logo1 from "../../assets/logo/Vector-1.png";
import Logo2 from "../../assets/logo/Vector.png";

import { TextField, Button, InputAdornment } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Typist from "react-typist-component";

function Subscribe() {
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
    <div className="subscribe-main-container">
      <div className="subscribe-container">
        <div className="first-logo">
          <img src={Logo1} alt="logo" />
        </div>
        <div className="subscribe-content" ref={typistRef}>
          {inView ? (
            <Typist>
              <h1>Subscribe to get fresh news update about our properties</h1>
            </Typist>
          ) : (
            <h1 style={{ opacity: 0 }}>
              Subscribe to get fresh news update about our properties
            </h1>
          )}

          <p className="gray-50">
            Stay up to date with Renting-Platform or get involved in our
            community
          </p>
          <TextField
            fullWidth
            variant="outlined"
            label="Enter Your Email"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="contained">Subscribe</Button>
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& .MuiInputLabel-root": {
                color: "#545b79", // Label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#545b79", // Label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#545b79", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#545b79", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#545b79", // Border color when focused
                },
              },
            }}
          />
        </div>
        <div className="second-logo">
          <img src={Logo2} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
