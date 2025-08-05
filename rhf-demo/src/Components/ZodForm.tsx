import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

// interface FormValues {
//   name: string;
//   email: string;
//   address: string;
// }

const ZodForm = () => {
  // define Zod schema and using refine to add custom validation
  const userSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("Email is required")
      // custom validation for email
      .refine((formField) => !formField.includes("admin"), {
        message: "Email cannot contain 'admin'",
      }),
    address: z
      .string()
      .nonempty("Address is required")
      .refine((formField) => formField.length >= 10, {
        message: "Address must be at least 10 characters long",
      }),
  });
  type schemaType = z.infer<typeof userSchema>;

  const { formState, register, control, handleSubmit } = useForm<schemaType>({
    defaultValues: {
      name: "",
      email: "",
      address: "",
    },
    resolver: zodResolver(userSchema),
  });

  const { errors } = formState;

  const onSubmit = (data: schemaType) => {
    console.log("Form submitted successfully:", data);

  };

  return (
    <div>
      <h1>Zod resolver form </h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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

export default ZodForm;

// command: npm install yup @hookform/resolvers
// command: npm install zod @hookform/resolvers
// Parse and Safeparse for validating data using Zod schema
// in rhf ,data is already validated by Zod resolver, no need to validate again