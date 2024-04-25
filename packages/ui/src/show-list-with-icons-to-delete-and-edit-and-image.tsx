import * as React from 'react';
import { useState } from 'react'; // Import useState hook
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import axios from "axios";

export default function ShowListWithIconsToDeleteAndEditAndImage({ items, handleChanges }: any) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>('');

  const onDeleteItem = async (index: number) => {
    try {
      const response = await axios.delete('/api/toDoList', {
        headers: {
          'Content-Type': 'application/json',
        },
        data: { id: index }, // Assuming index is the id of the item to delete
      });
      if (response.data) {
        handleChanges();
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };
  
  const onEditItem = async (index: number, newValue: string) => {
    try {
      const response = await axios.put('/api/toDoList', {
        id: index,
        description: newValue,
      });
      if (response.data) {
        handleChanges();
      }
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };
  
  const handleEdit = (index: number, value: string) => {
    setEditingIndex(index);
    setEditValue(value);
  };

  const handleSave = (index: number) => {
    if (editValue.trim() !== '') {
      onEditItem(index, editValue);
      setEditingIndex(null);
    }
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditValue('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 1000 }}>
      <Grid item xs={12} md={6}>
        <Box sx={{ flexGrow: 1 }}>
          <List>
            {items && items.map((item: any) => {
              return (
                <ListItem
                  key={item._id}
                  secondaryAction={
                    editingIndex === item._id ? (
                      <React.Fragment>
                        <IconButton edge="end" aria-label="save" onClick={() => handleSave(item._id)}>
                          <DoneIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="cancel" onClick={handleCancel}>
                          <ClearIcon />
                        </IconButton>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item._id, item.description)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" onClick={() => onDeleteItem(item._id)}>
                          <DeleteIcon />
                        </IconButton>
                      </React.Fragment>
                    )
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <EditIcon />
                    </Avatar>
                  </ListItemAvatar>
                  {editingIndex === item._id ? (
                    <input type="text" value={editValue} onChange={handleChange} />
                  ) : (
                    <ListItemText
                      primary={item.description}
                      secondary={null}
                    />
                  )}
                </ListItem>)

            })}
          </List>
        </Box>
      </Grid>
    </Box>
  );
}
