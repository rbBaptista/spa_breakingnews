import { StyledAuth, Card } from "./StyledAuth";
import { SignIn } from "../../components/SignIn/SignIn";
import { SignUp } from "../../components/SignUp/SignUp";

function Auth() {
  return (
    <StyledAuth>
      <Card>
        <SignIn></SignIn>
      </Card>
      <Card>
        <SignUp></SignUp>
      </Card>
    </StyledAuth>
  );
}

export default Auth;
