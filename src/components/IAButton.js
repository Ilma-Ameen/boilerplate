import * as React from "react";
import Button from "@mui/material/Button";

export default function IAButton(props){
    const {variant, color, sx, children, onclick, classname} = props;
    return(
        <Button variant={variant} color={color} sx={sx} onclick={onclick} className={classname}>
            {children}
        </Button>
    );
}