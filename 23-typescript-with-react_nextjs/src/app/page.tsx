import Todos from "./components/Todos";
import styles from "./page.module.css";
import Button from "./components/Button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Todos</h1>
        <Todos items={["Learn React", "Learn TypeScript"]}></Todos>
        <Button
          textColor="white"
          bgColor="blue"
          fSize="16px"
          fWeight={700}
          size="large"
          padding={["10px", "20px", "10px", "20px"]}
          className="btn"
        ></Button>
      </main>
    </div>
  );
}
