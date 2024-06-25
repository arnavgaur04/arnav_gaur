import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import $ from "jquery"

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({id, text_bioEnter, text_bannerEnter, textLeave, variants}) {

  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useParallax(scrollYProgress, 150);
  const proj = ["extract-from-docx", "Feedback Portal", "RapidReview"];
  const url = ["https://www.npmjs.com/package/extract-from-docx", "https://github.com/arnavgaur04/Feedback_portal", "https://github.com/arnavgaur04/RapidReview"];

  return (
    <section>
      <motion.div ref={ref}>
        <a href = {url[id-1]} target="_blank">
        <img src={`${id}.jpg`} variants={variants} alt={proj[id-1]} onMouseEnter={text_bioEnter} onMouseLeave={textLeave}/>
        </a>
      </motion.div>
      <motion.h2 className="project_name" onMouseEnter={text_bannerEnter} onMouseLeave={textLeave} style={{ y }}>{proj[id-1]}</motion.h2>
    </section>
  );
}

const Home = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(()=>{
    const mouseMove = e => {
        setMousePosition( 
        {
          x: e.clientX,
          y: e.clientY
        })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const { scrollYProgress } = useScroll();

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text_bio: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: "10vw",
      width: "10vw",
      backgroundColor: "#90A2A6",
      mixBlendMode: "overlay"
    },
    text_banner: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "#90A2A6",
      mixBlendMode: "overlay"
    },
    text_contact: {
      x: mousePosition.x - 23,
      y: mousePosition.y - 23,
      height: 46,
      width: 46,
      backgroundColor: "#90A2A6",
      mixBlendMode: "overlay"
    }
  }

  const x1 = useTransform(scrollYProgress, [0, .2], [0, -600]);
  const x2 = useTransform(scrollYProgress, [0, .2], [0, 600]);
  const x3 = useTransform(scrollYProgress, [0, 0.6], [-1000, 600]);

  const text_bioEnter = () => setCursorVariant("text_bio");
  const text_bannerEnter = () => setCursorVariant("text_banner");
  const textLeave = () => setCursorVariant("default");

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
        <div className="top_container">
          <div className="banner">
            <div className="name" onMouseEnter={text_bannerEnter} onMouseLeave={textLeave}>
              Arnav Gaur
            </div>
            
            <div className="connect" onMouseEnter={text_bannerEnter} onMouseLeave={textLeave}>
              <a href="#contact">Connect</a>
            </div>
          </div>

          {/* <motion.div className="cursor" variants={variants} animate = {cursorVariant}></motion.div> */}

          <div className="container_bio">
            <div className="developer_text bio_text" onMouseEnter={text_bioEnter} onMouseLeave={textLeave}>Creative & Technical</div>
            <div className="fullstack_text bio_text" onMouseEnter={text_bioEnter} onMouseLeave={textLeave}>Full-stack Developer</div>
          </div>

          <div className="about_container">
            <div className="about_container_text" onMouseEnter={text_bannerEnter} onMouseLeave={textLeave}>
              Hello👋! I'm Arnav. I'm a stickler for detail and I ensure that the work I produce is always consistent of a high technical and aesthetic standard.
            </div>

            <div className="hello"></div>
          </div>
        </div>

        <div className="project">
          <motion.div className="project_heading" onMouseEnter={text_bioEnter} onMouseLeave={textLeave} style={{x: x3}}>
            My projects My projects My projects My projects My projects My projects My projects My projects My projects My projects My projects My projects My projects My projects My projects My projects
          </motion.div>

          <div className="project_container">

              {[1, 2, 3].map((image) => (
                <Image id={image}  text_bioEnter={text_bioEnter} textLeave={textLeave} variants = {variants} className="project_image" text_bannerEnter={text_bannerEnter}/>
              ))}
              <motion.div className="progress" style={{ scaleX }} />

          </div>

          <div className="instruction">Keep scrolling <b>↓</b></div>
        </div>

    </>
  )
};

export default Home;