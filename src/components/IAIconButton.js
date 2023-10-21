import React from "react";
import IconButton from "@mui/material/IconButton";

export default function IAIconButton({ children, label, color, sx, onclick }) {
  return (
    <IconButton aria-label={label} color={color} sx={sx} onClick={onclick}>
      {children}
    </IconButton>
  );
}