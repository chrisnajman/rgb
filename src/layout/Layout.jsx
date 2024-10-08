import { Outlet } from "react-router-dom"
import SkipLink from "../components/SkipLink"
import BtnTheme from "../components/BtnTheme"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Layout() {
  return (
    <>
      <SkipLink />
      <BtnTheme />
      <div className="site-container">
        <Header />
        <main
          id="main-content"
          className="main-content"
        >
          <Outlet />
        </main>
        <Footer gitRepo="rgb" />
      </div>
    </>
  )
}

export default Layout
