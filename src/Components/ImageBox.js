import React, { useState } from "react";
import "./ImageBox.css";
import ReactTooltip from "react-tooltip";

import HD1 from "../images/HD1.jpg";
import HD2 from "../images/HD2.jpg";
import HD3 from "../images/HD4.jpg";

const ImageBox = () => {
  const [tooltip, showTooltip] = useState(true);

  return (
    <div className="img">
      <div>
        <div>
          {tooltip && (
            <ReactTooltip
              id="imageTip1"
              place="top"
              effect="solid"
              onMouseEnter={() => showTooltip(true)}
              onMouseLeave={() => {
                showTooltip(false);
                setTimeout(() => showTooltip(true), 50);
              }}
            >
              To prepare for your exams!!
            </ReactTooltip>
          )}

          <ReactTooltip id="imageTip2" place="top" effect="solid">
            To learn efficiently!!
          </ReactTooltip>

          <ReactTooltip id="imageTip3" place="top" effect="solid">
            To motivate you when you are feeling down!!
          </ReactTooltip>
        </div>

        <img src={HD1} alt={"study1"} data-tip data-for="imageTip1" />
        <img src={HD2} alt={"study2"} data-tip data-for="imageTip2" />
        <img src={HD3} alt={"study3"} data-tip data-for="imageTip3" />
      </div>
    </div>
  );
};

export default ImageBox;
