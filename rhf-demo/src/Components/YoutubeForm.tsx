import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
  socials: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  phNumbers: { number: string }[];
  age: number;
};

const YoutubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      socials: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""], // initiallizing phoneNumbers (2 fields)
      phNumbers: [{ number: "" }],
      age: 0,
    },
  });

  const { register, control, handleSubmit, formState } = form;
  // register is a function that registers the input field with the form
  // control is used to control the form state and validation
  // handleSubmit is a function that handles the form submission
  // formState contains the state of the form, like errors, isValid, isDirty, etc.
  const { errors } = formState;
  // error have types as requierd, pattern, minLength .. etc

  // useFieldArray is used to manage an array of fields in the form
  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  return (
    <div>
      <h1>An Youtube Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>

          {/* register function's first argument is the field name, and the second argument is the validation rules */}
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

        <div className="form-control">
          <label htmlFor="email">Email</label>
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
              validate: {
                noAdmin: (fieldValue) => {
                  // Custom validation function
                  if (fieldValue.includes("admin")) {
                    return "Email cannot contain 'admin'";
                  }
                  return true; // Return true if validation passes
                },
                notBlackList: (fieldName) => {
                  return (
                    !fieldName.endsWith("@blacklist.com") ||
                    "This email is blacklisted"
                  );
                },
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
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

        <div className="form-control">
          <label htmlFor="twitter">twitter</label>
          <input type="text" id="twitter" {...register("socials.twitter")} />
        </div>

        <div className="form-control">
          <label htmlFor="facebook">facebook</label>
          <input type="text" id="facebook" {...register("socials.facebook")} />
        </div>

        <div className="form-control">
          <label htmlFor="primary-phone">primary phone number</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0")}
          />
        </div>

        <div className="form-control">
          <label htmlFor="secondary-phone">secondary phone number</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1")}
          />
        </div>

        <div>
          <label>List of phone numbers</label>
          <div>
            {fields.map((field, index) => (
              <div className="form-control" key={field.id}>
                <input
                  type="text"
                  {...register(`phNumbers.${index}.number` as const)}
                />
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    remove
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => append({ number: "" })}>
              Add phone number
            </button>
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="age">age</label>
          <input
            type="number"
            id="age"
            {...register("age", {
              required: {
                value: true,
                message: "Age is required",
              },
              valueAsNumber: true, // note: use valueAsDate for date inputs
              validate : {
                notPositive: (value) => {
                  return value > 0 || "Age must be a positive number";
                }
              } // to convert the input value to a number
            })}
          />
          <p className="error">{errors.age?.message}</p>
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
