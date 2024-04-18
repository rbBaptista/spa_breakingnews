import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../Input/Input";
import { signIn } from "../../Services/UserService";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email().toLowerCase(),
  password: z.string().min(4),
});

function SignIn() {
  const navigate = useNavigate();
  const {
    register: registerSignIn,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    const response = await signIn(data);
    navigate(`/`);
    Cookies.set("token", response.data.token, { expires: 7 }); // Changed this line
    console.log("Sign In");
    console.log(response.data.token);
    return response;
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
