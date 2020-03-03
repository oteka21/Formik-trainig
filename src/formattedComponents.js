import React from "react";
import {
  TextField,
  Checkbox,
  Radio,
  FormControlLabel
} from "@material-ui/core";
import { useField, Field } from "formik";

export const CustomField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error ? meta.error : "";
  return (
    <Field
      label={label}
      {...field}
      error={error ? true : false}
      helperText={error}
      fullWidth
      as={TextField}
    />
  );
};

export const CustomCheck = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <FormControlLabel
      control={
        <Field {...field} as={Checkbox} type="checkbox" value={props.value} />
      }
      label={label}
    />
  );
};

export const CustomRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <FormControlLabel
      control={<Field {...field} as={Radio} type="radio" value={props.value} />}
      label={label}
    />
  );
};
