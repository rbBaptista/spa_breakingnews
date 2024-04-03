import { StyledAuth, Card } from "./StyledAuth";

function Auth() {
  return (
    <StyledAuth>
      <Card type="signin">
        <form>
          <h2>Login</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Card>
      <Card type="signup">
        <form>
          <h2>Cadastro</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Nome completo
            </label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputUserName1" className="form-label">
              Nome de usuário
            </label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Senha
            </label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Card>
    </StyledAuth>
  );
}

export default Auth;
