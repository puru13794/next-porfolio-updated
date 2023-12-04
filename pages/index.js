import styles from "@/styles/Home.module.css";
import TypeWriterEffect from "../components/TypeWriter";
import NavBar from "../components/NavBar";
import Contact from "../components/contact";



export default function Home() {
  return (
    <>
      <NavBar />
      <TypeWriterEffect/>
      <Contact/>
    </>
  );
}
