

import { Button } from "@repo/ui/button";
import styles from "./page.module.css";


export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Button appName="web" className={styles.button}>
        Click me!
      </Button>
    </main>
  );
}
