import React from "react";
import { Field, FieldProps } from "formik";

interface Props {
  id: string;
  name: string;
}

export const CheckboxHtml = ({ id, name }: Props): JSX.Element => (
  <Field
    name={name}
    render={({ field }: FieldProps) => (
      <input
        id={id}
        {...field}
        type="checkbox"
        checked={field.value}
      />
    )}
  />
);
