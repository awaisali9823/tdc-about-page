import Image from "next/image";
import NavBar from "../../../../_components/NavBar";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <>
      <NavBar />
      <div className={styles.main}>
        <h1 className={styles.text}>We Are A Digital Transformation Company</h1>
      </div>
    </>
  );
}
