import Image from "next/image";
import Ceo from "@/_assets/pngs/ceo.png";
import vector from "@/_assets/pngs/Vector.png";
import styles from "./index.module.css";
export default function CeoSection() {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.title}>
          <hr className={styles.line} />
          <h6>Meet Our CEO</h6>
        </div>
        <Image
          src={vector}
          alt="vector"
          width={27}
          height={44}
          className={styles.comma}
        />
        <Image
          src={vector}
          alt="vector"
          width={27}
          height={44}
          className={styles.comma}
        />
        <p className={styles.p1}>
          Our belief has always been that talent has no boundaries, and if
          opportunity were shared equally among everyone in the world and a
          fast-track channel was established to match opportunities with the
          best resources, the results of the fusion of skills and ideas would be
          a technology revolution that would set new standards for the industry.
        </p>
        <p className={styles.p2}>
          Fahad Tufail, CEO of TDC | The Dev Corporate
        </p>
      </div>
      <div>
        <Image
          src={Ceo}
          alt="ceo"
          width={420}
          height={520}
          className={styles.ceoImg}
        />
      </div>
    </div>
  );
}
