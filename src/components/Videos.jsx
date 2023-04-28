import React from "react";
import { Stack, Box } from "@mui/material";


const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;