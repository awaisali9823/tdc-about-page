import Button from "@/_components/Button";
import styles from "./index.module.css";

export default function HeroSection() {
  return (
    <div className={styles.main}>
      <div className={styles.contentDiv}>
        <h1>Don&apos;t let the hiring process slow you down.</h1>
        <p>
          Trust us to find the perfect fit for your organisation and watch your
          business soar to new heights. Say goodbye to the never-ending search
          and hello to top talent with TDC.
        </p>
        <Button title={"Hire Now"} className={styles.btn} />
      </div>
    </div>
  );
}
