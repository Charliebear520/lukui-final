import { Link } from "react-router-dom";
import styles from "./readygoitem.module.css";
import { Button } from "antd";

export default function ReadyGoItem({ collection }) {
    return (
      <div className={styles.item}>
        <Link to={`/collections/id/${collection.id}`}>
          <img style={{ width: "100%" ,padding:"1.5rem",borderRadius: 10}} src={collection.image} alt={collection.name} />
        </Link>
        <div className={styles.info}>
          {/* <h6 className={styles.category}>
                 {collection.category}
              </h6> */}
          <h2 className={styles.name}>{collection.name}</h2>
          <p className={styles.description}>{collection.description}</p>
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
          編輯
        </Button>
      </div>
    </div>
  );
}