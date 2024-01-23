import { useState, useRef } from "react";
import TypeWriterEffect from "../components/TypeWriter";
import Timeline from "../components/Timeline/index";
import NavBar from "../components/NavBar";
import Contact from "../components/contact";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import "../styles/Home.module.css";

export default function Home() {
  const [slideshow, setSlideShow] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const aboutRef = useRef();
  return (
    <div id="nav-wrapper">
      <NavBar
        stickyNav={stickyNav}
        setStickyNav={setStickyNav}
        outerContainerId={"nav-wrapper"}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <TypeWriterEffect
        setSlideShow={setSlideShow}
        timelineRef={aboutRef}
        stickyNav={stickyNav}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <About aboutRef={aboutRef} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
