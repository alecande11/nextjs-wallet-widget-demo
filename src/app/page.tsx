"use client";
import { useWallet } from "@initia/react-wallet-widget/ssr";
import styles from "./page.module.css";

export default function Home() {
  const { onboard, address } = useWallet();
  return (
    <div className={styles.page}>
      {address ? (
        <p>{address}</p>
      ) : (
        <button onClick={() => onboard()}>Connect Wallet</button>
      )}
    </div>
  );
}
