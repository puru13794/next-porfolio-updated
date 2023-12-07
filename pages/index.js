import styles from "@/styles/Home.module.css";
import TypeWriterEffect from "../components/TypeWriter";
import Timeline from "../components/Timeline/index";
import NavBar from "../components/NavBar";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <TypeWriterEffect />
      <Timeline />
      <Contact />
    </>
  );
}
