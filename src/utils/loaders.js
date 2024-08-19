import { defer } from "react-router-dom"
const baseUrl = "/rgb"
const dataUrl = `${baseUrl}/data/colors.json`

export function colourDetailLoader({ params }) {
  return defer({ colour: getColourDetail({ params }) })
}

export function coloursLoader() {
  return defer({ colours: getColours() })
}

async function getColourDetail({ params }) {
  try {
    const response = await fetch(dataUrl)

    if (!response.ok) {
      throw new Error(`Failed to fetch colour data: ${response.statusText}`)
    }
    verifyJsonContentType(response)

    const paramsName = params.colour
    console.log(params)
    const colourName = paramsName
      .replace(/-/g, " ")
      .replace(
        /\w\S*/g,
        (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
      )

    const colours = await response.json()
    const colour = colours.find((colour) => colour.name === colourName)
    if (!colour) {
      throw new Error("Colour not found")
    }
    return colour
  } catch (error) {
    console.error("Error in colourDetailLoader:", error)
    buildErrorObject(error)
  }
}

async function getColours() {
  try {
    const response = await fetch(dataUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch colours data: ${response.statusText}`)
    }
    verifyJsonContentType(response)

    const colours = await response.json()
    return colours
  } catch (error) {
    console.error("Error in coloursLoader:", error)
    buildErrorObject(error)
  }
}

/** Helper functions */
// Check for broken file path to JSON (etc)
function verifyJsonContentType(response) {
  const contentType = response.headers.get("content-type")
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error(`Expected JSON but got: ${contentType}`)
  }
}

// Output error messages
function buildErrorObject(error) {
  throw {
    message: error.message || "An unknown error occurred",
    statusText: error.statusText || "No status text available",
    status: error.status || 500,
  }
}
