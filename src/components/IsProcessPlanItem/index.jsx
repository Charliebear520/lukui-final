import Link from "next/link";
import styles from "./isprocesshomeitem.module.css";
import { Button } from "antd";


export default function IsProcessPlanItem({ process }) {
  return (
    <div className={styles.item}>
      <div className={styles.imgbox}>
      <Link href="/product">
      {/* <Link to={`/collectiones/id/${collection.id}`}> */}
        <img
          style={{ width: "100%", borderRadius: 20 }}
          src={process.image}
          alt={process.name}
        />
      </Link>
      </div>
 
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
