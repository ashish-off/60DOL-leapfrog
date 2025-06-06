import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const YoutubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    }
  });
  const { register, control, handleSubmit, formState } = form;
  // register is a function that registers the input field with the form
  // control is used to control the form state and validation
  // handleSubmit is a function that handles the form submission
  // formState contains the state of the form, like errors, isValid, isDirty, etc.
  const { errors } = formState;
  // error have types as requierd, pattern, minLength .. etc
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  return (
    <div>
      <h1>An Youtube Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>

        {/* register function's first argument is the field name, and the second argument is the validation rules */}
        <div className="form-control">
          <input
            type="text "
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "username is required",
              },
            })}
          />
          {errors.username && (
            <p className="error">{errors.username.message}</p>
          )}
        </div>

        <label htmlFor="email">Email</label>
        <div className="form-control">
          <input
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },

              // custom validation is created using validate function
              validate:{
                noAdmin :  (fieldValue) => {
                  // Custom validation function
                  if (fieldValue.includes("admin")) {
                    return "Email cannot contain 'admin'";
                  }
                  return true; // Return true if validation passes
                },
                notBlackList: (fieldName) => {
                  return !fieldName.endsWith("@blacklist.com")
                    || "This email is blacklisted"
                }
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <label htmlFor="channel">Channel</label>
        <div className="form-control">
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "Channel is required",
              },
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;

// how to react hook form 

// 1. Install and Import
// Install with npm install react-hook-form
// Import useForm from "react-hook-form"

// 2. Initialize the Form
// Call const { register, handleSubmit, formState, control } = useForm()

// 3.Register Inputs
// Use {...register("fieldName", validationRules)} on your input fields

// 4.Handle Form Submission
// Use <form onSubmit={handleSubmit(onSubmit)}>
// Define an onSubmit function to receive form data

// 5. Validation
// Add validation rules in the register function (e.g., required, pattern, minLength)
// Use formState.errors to display validation messages

// 6.Access Form State
// Use formState for errors, dirty state, touched fields, etc.

// 7. Custom Validation
// Use the validate property in register for custom logic

// 8. DevTools (Optional)
// Use <DevTool control={control} /> for debugging (from @hookform/devtools)