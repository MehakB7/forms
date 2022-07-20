import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useField } from "formik";
export const SelectBox = ({ options, title, ...other }) => {
  const [fields, meta, helpers] = useField(other.name);

  return (
    <FormControl sx={{ minWidth: "240px", ml: 0 }}>
      <InputLabel id="title">{title}</InputLabel>
      <Select
        labelId="title"
        {...other}
        {...fields}
        error={Boolean(meta.error && meta.touched)}
      >
        {options.map((item, index) => (
          <MenuItem value={item.value} key={index}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
