import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";
import StatusState from "../components/StatusState.jsx";

export default function RouteError() {
  const error = useRouteError();
  const navigate = useNavigate();

  const message = isRouteErrorResponse(error)
    ? error.statusText || "Something went wrong."
    : error instanceof Error
      ? error.message
      : "Something went wrong.";

  return (
    <main>
      <StatusState
        variant="error"
        message={message}
        onRetry={() => navigate(0)}
      />
    </main>
  );
}
