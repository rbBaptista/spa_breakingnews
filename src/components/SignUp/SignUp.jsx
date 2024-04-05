import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../Input/Input";
import { createUser } from "../../Services/UserService";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(4),
  username: z.string().min(2),
});

function SignUp() {
  const {
    register: registerSignUp,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await createUser(data);
      console.log("Sign Up");
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...registerSignUp("name")} type="text" placeholder="Name" />
        {errors.name && <p>{errors.name.message}</p>}
        <Input {...registerSignUp("username")} type="text" placeholder="User Name" />
        <Input {...registerSignUp("email")} type="email" placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
        <Input {...registerSignUp("password")} type="password" placeholder="Password" />
        {errors.password && <p>{errors.password.message}</p>}
        <Input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export { SignUp };
