import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"
import { coloursLoader, colourDetailLoader } from "./utils/loaders"

import Colours from "./pages/Colours"
import ColourDetail from "./pages/ColourDetail"
import Hex from "./pages/colourDetailSections/Hex"
import RGB from "./pages/colourDetailSections/RGB"
import CSSColourName from "./pages/colourDetailSections/CSSColourName"
import WebSafe from "./pages/colourDetailSections/WebSafe"
import About from "./pages/About"
import PageNotFound from "./pages/PageNotFound"

import Layout from "./layout/Layout"

import Error from "./components/Error"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
    >
      <Route
        index
        element={<Colours />}
        loader={coloursLoader}
        errorElement={<Error />}
      />
      <Route
        path="/:colour"
        element={<ColourDetail />}
        loader={colourDetailLoader}
        errorElement={<Error />}
      >
        <Route
          index
          element={<Hex />}
        />
        <Route
          path="rgb"
          element={<RGB />}
        />
        <Route
          path="css-colour-name"
          element={<CSSColourName />}
        />
        <Route
          path="web-safe"
          element={<WebSafe />}
        />
      </Route>

      <Route
        path="about"
        element={<About />}
      />

      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Route>
  ),
  { basename: "/rgb/" }
)

function App() {
  return <RouterProvider router={router} />
}

export default App
