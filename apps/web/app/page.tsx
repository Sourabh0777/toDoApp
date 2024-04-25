

"use client"
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import OutlinedCard from "@repo/ui/card";
import BasicTextFields from "@repo/ui/text-field";
import ImageAvatars from "@repo/ui/image-avatar";
import { Divider } from "@mui/material";
import ShowListWithIconsToDeleteAndEditAndImage from "@repo/ui/show-list-with-icons-to-delete-and-edit-and-image";
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from "axios";
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
