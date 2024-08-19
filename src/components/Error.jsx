import { Link } from "react-router-dom"
import { FaCircleArrowLeft } from "react-icons/fa6"
import { useRouteError } from "react-router-dom"
import PageTitle from "./PageTitle"

export default function Error() {
  const error = useRouteError()
  const message = error?.message || "An unexpected error occurred"
  const statusText = error?.statusText || "No additional information"
  const status = error?.status || "Unknown status"

  return (
    <>
      <PageTitle title={`Error: ${error.message}`} />
      <div className="container error-pages">
        <h1>Error: {message}</h1>
        <ul className="error-info">
          <li>{statusText}</li>
          <li>Status: {status}</li>
        </ul>

        <Link
          to="/"
          className="back-link arrow"
        >
          <FaCircleArrowLeft />
          <span>Back to the home page</span>
        </Link>
      </div>
    </>
  )
}
