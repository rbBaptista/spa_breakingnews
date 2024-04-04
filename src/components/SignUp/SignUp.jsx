import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../Input/Input";

const schema = z.object({
  name: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(4),
});

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Sign Up");
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("name")} type="text" placeholder="Name" />
        {errors.name && <p>{errors.name.message}</p>}
        <Input {...register("lastName")} type="text" placeholder="Last Name" />
        {errors.lastName && <p>{errors.lastName.message}</p>}
        <Input {...register("email")} type="email" placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
        <Input {...register("password")} type="password" placeholder="Password" />
        {errors.password && <p>{errors.password.message}</p>}
        <Input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export { SignUp };
