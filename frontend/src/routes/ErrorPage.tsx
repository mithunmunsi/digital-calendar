import { Link, useRouteError } from "react-router-dom";

// styles
import "./ErrorPage.css";

const ErrorPage: React.FC = () => {
  const error = useRouteError() as Error;

  return (
    <div className="errorpage">
      <h1>Error Page</h1>
      <p className="error">{error.message}</p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default ErrorPage;
