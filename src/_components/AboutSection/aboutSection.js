import Image from "next/image";
import Office from "@/_assets/pngs/office.png";
import blue from "@/_assets/pngs/blue.png";
import Button from "../Button/button";
import styles from "./aboutSection.module.css";
export default function AboutSection() {
  return (
    <div className={styles.main}>
      <div className={styles.flexSection}>
        <Image
          src={Office}
          alt="office"
          width={550}
          height={425}
          className={styles.image}
        />
        <div className={styles.centerText}>
          <h6 className={styles.h6}>Who We Are</h6>
          <h1 className={styles.h1}>A little about us.</h1>
          <p className={styles.p}>
            We are a resource augmentation company that specialises in finding
            and placing the best candidates for your open positions. Whether you
            need contract, contract-to-hire, or direct-hire staff, our team of
            experienced recruiters and hiring experts will work closely with you
            to ensure a perfect fit for your organisation.
          </p>
          <Button title={"Talk To Us"} className={styles.aboutButton} />
        </div>
      </div>
      <Image
        src={blue}
        alt="cutImage"
        width={173}
        height={173}
        className={styles.cutImage}
      />
    </div>
  );
}
