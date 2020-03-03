import React from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import * as yup from "yup";
import { CustomField, CustomCheck, CustomRadio } from "./formattedComponents";
import { CustomSelect } from "./CustomField";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required("Esto es requerido!"),
  email: yup.string().email(),
  students: yup.array().of(
    yup.object({
      name: yup.string().required("Campo Requerido!")
    })
  )
});

const formik = {
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    remember: false,
    list: [],
    country: "",
    students: [
      {
        name: "",
        sex: ""
      }
    ]
  },
  validationSchema: schema,
  onSubmit(values) {
    alert(JSON.stringify(values, null, 2));
  }
};

export default function App() {
  return (
    <Formik {...formik}>
      {({ values }) => (
        <Form>
          <CustomField name="firstName" label="Primer Nombre" />
          <CustomField name="lastName" label="Apellido" />
          <CustomField name="email" label="Correo" />
          <CustomCheck name="remember" label="Remember" />
          <CustomCheck name="list" label="Rice" value="rice" />
          <CustomCheck name="list" label="Milk" value="milk" />
          <CustomCheck name="list" label="Eggs" value="eggs" />
          <Field as={CustomSelect} name="country">
            <option value="Colombia">Colombia</option>
            <option value="Venezuela">Venezuela</option>
          </Field>
          <FieldArray name="students">
            {arrayHelpers => (
              <div>
                {values.students.map((item, index) => (
                  <div key={index}>
                    <CustomField
                      name={`students.${index}.name`}
                      label="Nombre Estudiante"
                    />
                    <CustomRadio
                      name={`students.${index}.sex`}
                      label="Male"
                      value="male"
                    />
                    <CustomRadio
                      name={`students.${index}.sex`}
                      label="Female"
                      value="female"
                    />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      REMOVE
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    arrayHelpers.push({
                      name: "Jose",
                      sex: ""
                    })
                  }
                >
                  Add one
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Submit</button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}
