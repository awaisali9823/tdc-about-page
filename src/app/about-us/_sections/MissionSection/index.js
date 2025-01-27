import Image from "next/image";
import Mission from "@/_assets/pngs/marsad.png";
import Yellow from "@/_assets/pngs/yellow.png";
import styles from "./index.module.css";
export default function MissionSection() {
  return (
    <div className={styles.bgDiv}>
      <div className={styles.main}>
        <div className={styles.imgDiv}>
          <Image src={Mission} alt="mission" width={500} height={480} />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <hr className={styles.line} />
            <h6>Our Mission</h6>
          </div>
          <h1>We’re on a mission to empower companies!</h1>
          <p>
            Our mission is to be the leading provider of innovative and
            sustainable resource augmentation solutions, empowering
            organizations to achieve their full potential. We strive to create a
            win-win situation for both our clients and our team members, by
            fostering a culture of collaboration, continuous learning, and
            respect. Our vision and ultimate goal is to support organizations in
            achieving their goals and creating a better future for all and to be
            the leading provider of innovative and sustainable resource
            augmentation solutions, empowering organizations to achieve their
            full potential.
          </p>
        </div>
        <Image
          src={Yellow}
          alt="cutImage"
          height={150}
          width={150}
          className={styles.image1}
        />
        <Image
          src={Yellow}
          alt="cutImage"
          height={150}
          width={150}
          className={styles.image2}
        />
      </div>
    </div>
  );
}
