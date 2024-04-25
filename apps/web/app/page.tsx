

"use client"
import styles from "./page.module.css";

import { useEffect } from "react";

import ToDo from "./home/page";
import { useSession } from "next-auth/react";

export default function Page() {
  const session = useSession()
  useEffect(() => { }, [session])

  if (session.data === null) {
    return (
      <main className={styles.main}>
        <h1>Login First</h1>
      </main >
    );
  }
  else {
    return (<main className={styles.main}>
      <ToDo></ToDo>
    </main >)

  }
}
