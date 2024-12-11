/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import "./JoinCard.css";

import { Card, CardMedia, CardContent } from "@mui/material";
import Typist from "react-typist-component";

export type JoinCardProps = {
  src: string;
  title: string;
  body: string;
  number: number;
};

function JoinCard(props: JoinCardProps) {
  const { src, title, body, number } = props;

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
    <Card className="join-card-container" ref={typistRef}>
      <h2 className="gray-100">{number}</h2>
      <CardMedia image={src} title={title} className="join-card-image" />
      <CardContent className="join-card-content">
        {inView ? (
          <Typist restartKey={restartKey}>
            <h1>{title}</h1>
          </Typist>
        ) : (
          <h1 style={{ opacity: 0 }}>{title}</h1>
        )}
        <p className="gray-50">{body}</p>
      </CardContent>
    </Card>
  );
}

export default JoinCard;
