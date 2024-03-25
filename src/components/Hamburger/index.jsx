"use client";

import { useState } from "react";
import HamMenu from "../HambugerMenu";
import NavBar from "../NavBar";
import Image from "next/image";
import styles from "./hamburger.module.css";

export default function Hamburger() {
  const [isOnTouch, setIsOnTouch] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.imagebox}>
        <Image width={80} height={90} src="/logo.png" alt="logo" />
      </div>
      <HamMenu onClick={() => setIsOnTouch(!isOnTouch)} isOnTouch={isOnTouch} />
      <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
    </div>
  );
}
