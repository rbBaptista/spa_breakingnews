import { useLocation } from "react-router-dom";

function ErrorPage() {
  const location = useLocation();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        You attempted to access: <strong>{location.pathname}</strong>, which does not exist.
      </p>
      <p>Please check the URL for mistakes or use the navigation menu to access other sections of the site.</p>
      <p>
        <a href="/">Click here to go back to the homepage</a>
      </p>
    </div>
  );
}

export default ErrorPage;
