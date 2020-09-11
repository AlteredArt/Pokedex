import React, { useState, useEffect } from "react";
// import "./styles.css";
import './effect.css'

const SampleUseEffect = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(-1);

  const { x, y } = coordinates;

  const mouseClickHandler = event => {
    setCoordinates({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("click", mouseClickHandler);
    return () => {
      document.removeEventListener("click", mouseClickHandler);
    };
  }, []);

  useEffect(() => {
    setClickCount(clickCount => clickCount + 1);
  }, [coordinates]);

  return (
    <div>
      {x},{y} - {clickCount}
    </div>
  );
};

export default SampleUseEffect;
