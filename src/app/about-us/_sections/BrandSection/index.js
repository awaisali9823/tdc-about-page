import styles from "./index.module.css";
import Swvl from "@/_assets/pngs/swvl.png";
import Atoms from "@/_assets/pngs/atoms.png";
import Chex from "@/_assets/pngs/chex.png";
import Bond from "@/_assets/pngs/bondai.png";
import Care from "@/_assets/pngs/care.png";
import Soft from "@/_assets/pngs/it.png";
import Uptok from "@/_assets/pngs/uptok.png";
import Image from "next/image";
export default function BrandSection() {
  return (
    <div className={styles.parentBox}>
      <div className={styles.main}>
        <h1 className={styles.h1}>Value Added to These Brands</h1>
        <div className={styles.brandsDiv}>
          <Image src={Swvl} alt="swvl" width={168} height={172} />
          <Image src={Atoms} alt="atoms" width={255} height={55} />
          <Image src={Chex} alt="chex" width={236} height={64} />
          <Image src={Bond} alt="bond" width={215} height={64} />
          <Image src={Care} alt="care" width={187} height={84} />
          <Image src={Soft} alt="soft" width={250} height={68} />
          <Image src={Uptok} alt="uptok" width={210} height={78} />
        </div>
      </div>
    </div>
  );
}
