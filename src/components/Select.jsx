import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useField } from "formik/dist/Field";

export const SelectBox = ({ options, title, ...other }) => {
  const [fields, meta, helpers] = useField(other.name);

  const children = options.map((item, index) => (
    <MenuItem value={item.value}>{item.name}</MenuItem>
  ));

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-helper-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        {...other}
        {...fields}
        error={Boolean(meta.error && meta.touched)}
      >
        {children}
      </Select>
    </FormControl>
  );
};
