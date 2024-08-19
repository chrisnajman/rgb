import { Suspense } from "react"
import { Link, useSearchParams, useLoaderData, Await } from "react-router-dom"
import { FaCircleArrowRight } from "react-icons/fa6"

import Loading from "../components/Loading"
import PageTitle from "../components/PageTitle"

export default function Colours() {
  const [searchParams, setSearchParams] = useSearchParams()
  const familyFilter = searchParams.get("family")
  const dataPromise = useLoaderData()

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  function renderColourElements(colours) {
    const displayedColours = familyFilter
      ? colours.filter((colour) => colour.family.toLowerCase() === familyFilter)
      : colours

    const colourElements = displayedColours.map((colour) => {
      return (
        <Link
          to={colour.name.replace(/\s+/g, "-").toLowerCase()}
          state={{
            search: `?${searchParams.toString()}`,
            family: familyFilter,
          }}
          key={colour.id}
          title={colour.name}
          className="colour-tile"
          style={{ backgroundColor: `${colour.hex}` }}
        >
          <span className="visually-hidden">
            Link to details about {colour.name}
          </span>
          <span className="arrow">
            <FaCircleArrowRight aria-hidden="true" />
          </span>
        </Link>
      )
    })

    return (
      <>
        <form className="colour-list-filters container">
          <legend>Filters:</legend>
          <button
            type="button"
            onClick={() => handleFilterChange("family", "reds")}
            className={`colour-family reds 
                        ${familyFilter === "reds" ? "selected" : ""}`}
          >
            Reds
          </button>
          <button
            type="button"
            onClick={() => handleFilterChange("family", "greens")}
            className={`colour-family greens 
                        ${familyFilter === "greens" ? "selected" : ""}`}
          >
            Greens
          </button>
          <button
            type="button"
            onClick={() => handleFilterChange("family", "blues")}
            className={`colour-family blues 
                        ${familyFilter === "blues" ? "selected" : ""}`}
          >
            Blues
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange("family", null)}
            className="colour-family clear-filters"
            disabled={familyFilter ? false : true}
          >
            Clear filter
          </button>
        </form>

        <div className="colour-list">{colourElements}</div>
      </>
    )
  }

  return (
    <>
      <PageTitle title="RGB" />
      <div className="colours flow">
        <h1>Colours</h1>
        <p>
          Click on a colour to see its{" "}
          <abbr title="Cascading Style Sheets">CSS</abbr> values.
        </p>

        <Suspense fallback={<Loading title="Colours" />}>
          <Await resolve={dataPromise.colours}>{renderColourElements}</Await>
        </Suspense>
      </div>
    </>
  )
}
