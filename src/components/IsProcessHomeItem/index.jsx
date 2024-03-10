import Link from "next/link";
import styles from "./isprocesshomeitem.module.css";
import { Button } from "antd";
import Image from "next/image";

export default function IsProcessHomeItem({ process }) {
  return (
    <div className={styles.item}>
      <Link href="/product">
      {/* <Link to={`/processes/id/${process.id}`}> */}
        <Image
          width={100}
          height={100}
          className={styles.image}
          quality={100}
          src={process.image}
          alt={process.name}
        />
      </Link>
      <div className={styles.info}>
   
        <h2 className={styles.name}>{process.name}</h2>
        <p className={styles.description}>{process.description}</p>
      </div>
      <div className={styles.btnbox}>
        <Button
          type="primary"
          style={{
            background: "#FFCCCC",
            borderColor: "#000000",
            color: "#000000",
            fontSize: 20,
            fontFamily: "jf-openhuninn-2.0",
            fontWeight: "400",

            borderRadius: 50,
            border: "1px black solid",
          }}
          className={styles.btn}
        >
          查看
        </Button>
      </div>
    </div>
  );
}
