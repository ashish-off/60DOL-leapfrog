import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface FormValues {
  name: string;
  email: string;
  address: string;
}

const YupForm = () => {
  // define yup schema

  const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required")
      // custom validation for email
      .test("notAdmin", "Email cannot contain admin", (value) => {
        if (!value) return true; // if value is empty, skip validation
        return !value.includes("admin");
      }),
    address: yup.string().required("Address is required"),
  })
  
  const { formState, register, control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      address: "",
    },
    resolver: yupResolver(schema)
  });

  const { errors } = formState;


  const onSubmit = (data: FormValues) => {
    console.log("Form submitted successfully:", data);
  };

  return (
    <div>
      <h1>Yup form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register("name")} />
          <p className="error">{errors.name?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" {...register("address")} />
          <p className="error">{errors.address?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YupForm;

// command: npm install yup @hookform/resolvers 