import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

interface FormValues {
  name: string;
  email: string;
  address: string;
}

const ZodForm = () => {
  // define yup schema

  const schema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("Email is required"),
    address: z.string().nonempty("Address is required"),
  });

  const { formState, register, control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      address: "",
    },
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted successfully:", data);
  };

  return (
    <div>
      <h1>Zod resolver form </h1>

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

export default ZodForm;

// command: npm install yup @hookform/resolvers
