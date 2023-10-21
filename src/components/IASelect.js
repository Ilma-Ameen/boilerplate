import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function IASelect(props) {
  const {label, color, sx, classname, variant, size, helperText} = props;
  const [selected, setselected] = React.useState('');

  const handleChange = (e) => {
    setselected(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant={variant} className={classname} fullWidth>
        <InputLabel id={`demo-simple-select-label-${variant}`} color={color}>{label}</InputLabel>
        <Select
          labelId= {`demo-simple-select-label-${variant}`}
          id={`demo-simple-select-label-${variant}`}
          value={selected}
          label={label}
          onChange={handleChange}
          sx={sx}
          color={color}
          size={size}
          helperText={helperText}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          {/* {selectArray.map((x, i) => (
            <MenuItem key={i} value={x}>
              {x}
            </MenuItem>
          ))} */}
        </Select>
      </FormControl>
    </Box>
  );
};