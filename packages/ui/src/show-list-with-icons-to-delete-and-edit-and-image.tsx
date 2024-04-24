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

export default function ShowListWithIconsToDeleteAndEditAndImage({ items, onDeleteItem, onEditItem }: { items: string[], onDeleteItem: (index: number) => void, onEditItem: (index: number, newValue: string) => void }) {

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>('');

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
            {items.map((item, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  editingIndex === index ? (
                    <React.Fragment>
                      <IconButton edge="end" aria-label="save" onClick={() => handleSave(index)}>
                        <DoneIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="cancel" onClick={handleCancel}>
                        <ClearIcon />
                      </IconButton>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(index, item)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete" onClick={() => onDeleteItem(index)}>
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
                {editingIndex === index ? (
                  <input type="text" value={editValue} onChange={handleChange} />
                ) : (
                  <ListItemText
                    primary={item}
                    secondary={null}
                  />
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>
    </Box>
  );
}
