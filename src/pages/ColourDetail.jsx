import { Suspense } from "react"
import {
  Link,
  NavLink,
  useLocation,
  useLoaderData,
  Outlet,
  Await,
  useNavigate,
} from "react-router-dom"
import { FaCircleArrowLeft } from "react-icons/fa6"
import Loading from "../components/Loading"
import PageTitle from "../components/PageTitle"

export default function ColourDetail() {
  const location = useLocation()
  const dataPromise = useLoaderData()
  const navigate = useNavigate()

  const search = location.state?.search || ""
  const family = location.state?.family

  const handleBackClick = () => {
    navigate(`/${search}`)
  }

  function renderColourDetail(colour) {
    return (
      <>
        <PageTitle title={`${colour.name} | RGB`} />

        <div
          className="colour-box"
          style={{ backgroundColor: `${colour.hex}` }}
        >
          <h1>{colour.name}</h1>
        </div>
        <nav className="site-navigation detail-nav">
          <ul>
            <li>
              <NavLink
                to="."
                end
                state={{ search, family }}
              >
                Hex
              </NavLink>
            </li>
            <li>
              <NavLink
                to="rgb"
                state={{ search, family }}
              >
                RGB
              </NavLink>
            </li>
            <li>
              <NavLink
                to="css-colour-name"
                state={{ search, family }}
              >
                CSS Colour Name
              </NavLink>
            </li>
            <li>
              <NavLink
                to="web-safe"
                state={{ search, family }}
              >
                Web Safe?
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet context={{ colour }} />
      </>
    )
  }

  return (
    <div className="container colour-details">
      <div className="back-links">
        {family && (
          <button
            onClick={handleBackClick}
            className="back-link arrow"
          >
            <FaCircleArrowLeft />
            <span>
              Back to all <span className="colour-detail-family">{family}</span>
            </span>
          </button>
        )}
        <Link
          to=".."
          relative="path"
          className="back-link arrow"
        >
          <FaCircleArrowLeft />
          <span>Back to all colours</span>
        </Link>
      </div>
      <Suspense fallback={<Loading title="Colour" />}>
        <Await resolve={dataPromise.colour}>{renderColourDetail}</Await>
      </Suspense>
    </div>
  )
}
