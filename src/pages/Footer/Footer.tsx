/* eslint-disable react-hooks/exhaustive-deps */
import "./Footer.css";

import Logo from "../../assets/logo/logo.png";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Footer() {
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
    <div className="footer-main-container" ref={typistRef}>
      <div className="footer-inner-container">
        <div className="footer-container">
          <motion.div
            className="footer-company-logo"
            initial={{ opacity: 0, x: -200 }} // Start from left (negative x-axis)
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }} // End at original position (x: 0)
            transition={{ duration: 1 }}
          >
            <img src={Logo} alt="Logo" />
            <p className="gray-100">
              Please contact us if you have any specific idea or request.
            </p>
          </motion.div>
          <motion.div
            className="footer-links-main-section"
            initial={{ opacity: 0, x: 200 }} // Start from right (positive x-axis)
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }} // End at original position (x: 0)
            transition={{ duration: 1 }}
          >
            <div className="footer-links-section">
              <h4 className="gray-100">COMPANY</h4>
              <h5>How It Works</h5>
              <h5>Market</h5>
              <h5>About us</h5>
            </div>
            <div className="footer-links-section">
              <h4 className="gray-100">SOCIALS</h4>
              <h5>Twitter</h5>
              <h5>Instagram</h5>
              <h5>Facebook</h5>
            </div>
          </motion.div>
        </div>
        <p className="gray-100">
          &copy; {new Date().getFullYear()} Renting-Platform. All rights
          reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
