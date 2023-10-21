import { TypeSpecimen } from "@mui/icons-material";
import { TextField } from "@mui/material";

export default function IAInput(props){
    const {variant, label, color, value, onchange, sx, classname,helperText, type} = props;
    return(
       <TextField variant = {variant} label={label} color={color} value={value} onchange={onchange} sx={sx} className={classname} helperText={helperText} type={type}/>
    );
}