import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars({ imagePath }: any) {
  return (
    <Stack direction="row" spacing={5} sx={{ paddingLeft: 2, paddingTop: 1 }}>
      <Avatar alt="Remy Sharp" src={imagePath} />
    </Stack>
  );
}