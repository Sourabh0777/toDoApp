

"use client"
import { Button } from "@repo/ui/button";
import styles from "../page.module.css";
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
import { useSession } from "next-auth/react";

export default function ToDo(): JSX.Element {
    const { data: session } = useSession();
    const [listArray, setListArray] = useState([]);
    let [inputValue, setInputValue] = useState("");
    const [changeHandler, setChangeHandler] = useState(false);
    //Fetch List
    useEffect(() => {
        console.log("fetchTodos run again");

        fetchTodos(session?.user?.email);

    }, [changeHandler, session]);
    const fetchTodos = async (email: any) => {
        try {
            const res = await axios.get('/api/toDoList', {
                params: { email },
            });
            console.log("🚀 ~ fetchTodos ~ res:", res)
            setListArray(res.data.todos);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };
    //Change Handler 
    const handleChange = () => {
        setChangeHandler(!changeHandler)

    }
    //Add item to DB 
    const handleAddItem = async () => {
        const res = await axios.post('/api/toDoList', {
            description: inputValue,
            userEmail: session?.user?.email
        });
        setInputValue("");
        setChangeHandler(!changeHandler)
    };

    const setInputValueHandler = (item: string) => {
        setInputValue(item)
    }

    return (
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
                items={listArray}
                handleChanges={handleChange}
            />
        </OutlinedCard>
    );
}
