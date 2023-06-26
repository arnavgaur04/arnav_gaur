import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import $ from "jquery";

const ExpandingCircle = () => {
  const [circleHeight, setCircleHeight] = useState(0); // Initial size of the circle
  const [circleWidth, setCircleWidth] = useState(0); // Initial size of the circle
  const [expandingHeight, setExpandingHeight] = useState("100vh"); // Initial size of the circle
  const [circlePosition, setCirclePosition] = useState("fixed"); // Initial size of the circle
  const [leftPosition, setleftPosition] = useState("fixed"); // Initial size of the circle
  const [rightPosition, setrightPosition] = useState("fixed"); // Initial size of the circle
  const [circleTop, setCircleTop] = useState("50%"); // Initial size of the circle
  const [leftTop, setleftTop] = useState("35%"); // Initial size of the circle
  const [rightTop, setrightTop] = useState("45%"); // Initial size of the circle
  const [circleLeft, setCircleLeft] = useState("50%"); // Initial size of the circle
  const [rightLeft, setrightLeft] = useState("100%"); // Initial size of the circle
  const [leftLeft, setleftLeft] = useState("0%"); // Initial size of the circle
  const [circleTransform, setCircleTransform] = useState("translate(-50%, -50%)"); // Initial size of the circle
  const [circleBorder, setCircleBorder] = useState("50%"); // Initial size of the circle
  var newSize = useRef(0);
  var val = useRef(4*window.innerHeight);
  if ($(".project_heading").height() != undefined) {
    val.current = $(".project").height() + $(".top_container").height();
  }
  useEffect(() => {
    const handleScroll = () => {
      if ((window.scrollY - val.current) < 0 || window.scrollY < val.current) {
        setCircleHeight("0");
        setCircleWidth("0");
        setTechFont(0);
      } else {
        if (Math.max(window.innerWidth, window.innerHeight)*1.414 > (window.scrollY - val.current)) {
          newSize.current = window.scrollY - val.current; // You can adjust the division factor to control the expansion speed
          setleftLeft(50 - 50*((Math.max(window.innerWidth, window.innerHeight))*1.414 - (window.scrollY - val.current))/Math.max(window.innerWidth, window.innerHeight) + "%");
          setrightLeft(50 + 50*((Math.max(window.innerWidth, window.innerHeight))*1.414 - (window.scrollY - val.current))/Math.max(window.innerWidth, window.innerHeight) + "%");
          setCircleHeight(newSize.current);
          setCircleWidth(newSize.current);
          if (window.innerWidth > 1000) {
            setTechFont("4vw");
          }

          else
          {
            setTechFont("30px")
          }
          setCirclePosition("fixed");
          setleftPosition("fixed");
          setrightPosition("fixed");
          setCircleTop("50%");
          setCircleLeft("50%");
          setCircleBorder("50%");
          setCircleTransform("translate(-50%, -50%)");
          setleftTop("35%");
          setrightTop("45%");
          setleftPosition("fixed");
          setrightPosition("fixed");
          document.body.style.backgroundColor = "#90A2A6";
          // setExpandingHeight(newSize.current);
        }
        
        else
        {
          // setExpandingHeight((window.innerHeight + newSize.current));
          document.body.style.backgroundColor = "#E8E7CB";
          setCirclePosition("absolute");
          setCircleTop(`${val.current + newSize.current}px`);
          setCircleLeft("0");
          setCircleBorder("0");
          setCircleWidth("100vw");
          setCircleHeight(`100vh`);
          setCircleTransform("translate(0, 0)");
          setleftTop(`calc(${newSize.current + val.current}px + 35%)`);
          setrightTop(`calc(${newSize.current + val.current}px + 45%)`)
          setleftPosition("absolute");
          setrightPosition("absolute");
        }

        
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [techFont, setTechFont] = useState("0");

  return (
        <div className="expanding_container" id="expanding_container">
           <motion.div
             style={{
               width: circleWidth,
               height: circleHeight,
               borderRadius: circleBorder,
               background: '#E8E7CB',
               position: circlePosition,
               top: circleTop,
               left: circleLeft,
               transform: circleTransform,
               zIndex: 1,
             }}

             className="circle_enlarge"
           >
           </motion.div>
            <motion.div className="technologies_container_text" style={{fontSize: techFont, position: leftPosition, top: leftTop, left: leftLeft, transform: "translate(-50%, -50%)"}}>
                    Technologies I 
            </motion.div>
            <motion.div className="technologies_container_text" style={{fontSize: techFont, position: rightPosition, top: rightTop, left: rightLeft, transform: "translate(-50%, -50%)"}}>
                    have worked with
            </motion.div>

        </div>
  );
};


export default ExpandingCircle;
