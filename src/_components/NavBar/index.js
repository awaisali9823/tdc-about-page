import styles from "./navbar.module.css";
import Logo from "@/_assets/pngs/logo.png";
import Button from "@/_components/Button";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className={styles.navDiv}>
      <div className={styles.leftDiv}>
        <Image src={Logo} alt="logo-image" width={47} height={47} />
        <div className={styles.pDiv}>
          <p>Home</p>
          <p>Portfolio</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>
      </div>
      <Button title={"Hire Now"} />
      <i className={`fa-solid fa-bars ${styles.bars}`}></i>
    </div>
  );
}
