import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../Input/Input";

const schema = z.object({
  email: z.string().email().toLowerCase(),
  password: z.string().min(4),
});

function SignIn() {
  const {
    register: registerSignIn,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Sign In");
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...registerSignIn("email")} type="email" placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
        <Input {...registerSignIn("password")} type="password" placeholder="Password" />
        {errors.password && <p>{errors.password.message}</p>}
        <Input type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export { SignIn };
