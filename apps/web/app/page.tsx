

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

export default function Page(): JSX.Element {
  const [listArray, setListArray] = useState([]);
  let [inputValue, setInputValue] = useState("");
  // useEffect(() => {
  //   fetchTodos();
  // }, []);
  // const fetchTodos = async () => {
  //   try {
  //     const res = await axios.get('/api/todos');
  //     setListArray(res.data.todos);
  //   } catch (error) {
  //     console.error('Error fetching todos:', error);
  //   }
  // };
  const handleAddItem = async () => {
    const res = await axios.post('/api/toDoList', {
      description: inputValue,
      completed: false
    });
    console.log("🚀 ~ handleAddItem ~ res:", res)
    setInputValue("");
  };
  console.log("🚀 ~ Page ~ listArray:", listArray)

  const handleDeleteItem = (index: number) => {
    const updatedList = [...listArray];
    updatedList.splice(index, 1);
    setListArray(updatedList);
  };
  const handleEditItem = (index: number, newValue: string) => {
    const updatedList = [...listArray];
    // updatedList[index] = newValue;
    setListArray(updatedList);
  };
  const setInputValueHandler = (item: string) => {
    setInputValue(item)
  }

  return (
    <main className={styles.main}>
      <OutlinedCard>
        <BasicTextFields setInputValueHandler={setInputValueHandler} inputValue={inputValue} />
        <Button appName="web" className={styles.button} handleAddItem={handleAddItem}>
          Add
        </Button>
        <Divider />
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row", alignItems: "center" }}>
          <ImageAvatars imagePath="" />
          <Grid item xs={12} md={6} marginLeft={5}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              To Do list
            </Typography></Grid>
        </Box>
        <ShowListWithIconsToDeleteAndEditAndImage
          onDeleteItem={handleDeleteItem}
          onEditItem={handleEditItem}
          items={listArray}
        />
      </OutlinedCard>
    </main >
  );
}
