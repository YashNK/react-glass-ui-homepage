import React from "react";
import InputDemoImage from "/images/demo.webp";
import "./input-demo.scss";

export const InputDemo: React.FunctionComponent = () => {
  return (
    <div className="input_demo_section">
      <div className="image_container input_demo_section_image_container">
        <img src={InputDemoImage} className="background_image" />
      </div>
    </div>
  );
};
