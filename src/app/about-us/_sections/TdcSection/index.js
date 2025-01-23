import Button from "@/_components/Button";
import Image from "next/image";
import Meeting from "@/_assets/pngs/meeting.png";
import styles from "./index.module.css";
export default function TdcSection() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.title}>
          <hr className={styles.line} />
          <h6>What is TDC?</h6>
        </div>
        <h1>Are you tired of the never-ending search for top talent?</h1>
        <span>Look No Further!</span>
        <p>
          TDC is here to SUPERCHARGE your resource hiring process and take the
          burden off your shoulders.
        </p>
        <Button title={"Get Started Now"} className={styles.btn} />
      </div>
      <div className={styles.imgDiv}>
        <Image src={Meeting} alt="meeting" width={550} height={380} />
      </div>
    </div>
  );
}
