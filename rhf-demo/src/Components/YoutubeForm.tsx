import React, { useEffect } from "react";
import { useFieldArray, useForm, type FieldErrors } from "react-hook-form";
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
      age: undefined,
    },
    // validation mode 
    // mode: "onSubmit", // default
    // mode: "onBlur", 
    // mode: "onTouched"
    // mode: "onChange" 
    // mode: "all", // validate on all events
  });

  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
    trigger
  } = form;

  // error have types as requierd, pattern, minLength .. etc
  const {
    errors,
    touchedFields,
    dirtyFields,
    isDirty,
    isValid,
    isSubmitted,
    isSubmitSuccessful,
    isSubmitting,
    submitCount,
  } = formState;

  console.log({ submitCount, isSubmitting, isSubmitted, isSubmitSuccessful });

  // console.log({touchedFields, dirtyFields, isDirty,isValid });

  // useFieldArray is used to manage an array of fields in the form
  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  // watch is used to watch the value of a field (takes the field name as an argument or an array of field names)
  // const watchForm = watch(); // watch all fields
  const watchUsername = watch(["username", "email"]);

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  const handlegetValues = () => {
    console.log("for values :", getValues());
    // console.log("for values :", getValues("socials")); only get the socials object
  };

  const handleSetValues = () => {
    setValue("username", "ashishisa", {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("Form errors :", errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <h1>An Youtube Form</h1>
      <h2>
        Watch: {watchUsername[0]} and {watchUsername[1]}
      </h2>

      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>

          {/* register function's first argument is the field name, and the second argument is the validation rules */}
          <input
            type="text"
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
                notBlackList: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("@blacklist.com") ||
                    "This email is blacklisted"
                  );
                },
                emailAvaliable: async (fieldValue) => {
                  try {
                    const res = await fetch(
                      `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                    );
                    const data = await res.json();
                    if (data.length != 0) {
                      return "This email is already taken";
                    }
                    return true; // Return true if validation passes
                  } catch (error) {
                    console.error(
                      "the error in the emailAvaliable is : ",
                      error
                    );
                  }
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
              validate: {
                notPositive: (value) => {
                  return value > 0 || "Age must be a positive number";
                },
              }, // to convert the input value to a number
            })}
          />
          <p className="error">{errors.age?.message}</p>
        </div>

        {/* <button disabled = {!isDirty || !isValid} >Submit</button> */}

        {/* disable submit button while the form is submitting */}
        <button disabled={isSubmitting}>Submit</button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
        <button type="button" onClick={handlegetValues}>
          Get values
        </button>
        <button type="button" onClick={handleSetValues}>
          set value
        </button>

        <button type="button" onClick={() => trigger()}> {/* trigger validation for specific field : trigger("age") */}
          Validate
        </button>

      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;

// react hook form Notes

//  DevTools (Optional)
// Use <DevTool control={control} /> for debugging (from @hookform/devtools)

// 1. Install and Import
// Install with npm install react-hook-form
// Import useForm from "react-hook-form"

// 2. Initialize the Form
// Call const { register, handleSubmit, formState, control } = useForm()
// register is a function that registers the input field with the form
// control is used to control the form state and validation
// handleSubmit is a function that handles the form submission
// formState contains the state of the form, like errors, isValid, isDirty, etc.

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

// 8. Dynamic Fields
// Use useFieldArray for managing arrays of fields (appending, removing fields)

// 9. working on number and date inputs
//  Use valueAsNumber for number inputs and valueAsDate for date inputs in register

// 10. watch
// Use watch to monitor field values in real-time (e.g., const watchedValue = watch("fieldName")) renders the component whenever the watched field changes

// 11. getValues
// Use getValues() to retrieve current form values at any time which doesnot renders the component.  (takes the field name as an argument or an array of field names)

// 12. setValue
// Use setValue("fieldName", value, options) to programmatically set field values. it does not triggers like mannual input but you can pass options like shouldDirty, shouldTouch, shouldValidate to trigger the form state updates

// 13. touched and dirty
//  touched fields are the fields that have been interacted with, and dirty fields are the fields that have been changed from their initial value.

// 14. disabled
// pass the disabled as the secondary arguement to register function to disable the input field
// submit button can be disabled based on form state like isDirty, isValid, etc.

// 15. submitCount, isSubmitting, isSubmitted, isSubmitSuccessful
// submitCount : number of times the form has been submitted
// isSubmitting : boolean indicating if the form is currently submitting
// isSubmitted : boolean indicating if the form has been submitted at least once
// isSubmitSuccessful : boolean indicating if the form submission was successful

// 16. reset()
// Use reset() to reset the form to its default values or to specific values

// 17. async Vaidation
// Use async validation in the validate property of register for server-side checks

// 18. validation modes
// onSubmit : default, validates on form submission
// onBlur : validates when the field loses focus
// onTouched : validates when the field is touched
// onChange : validates on every change in the field
// all : validates on all events (onChange, onBlur, onSubmit)

// 19. trigger()
// Use trigger() to manually trigger validation for specific fields or the entire form
// trigger("fieldName") to validate a specific field