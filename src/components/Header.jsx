import Nav from "./Nav"

function Header() {
  return (
    <header className="site-header">
      <p className="site-header--h1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="40"
          viewBox="0 0 250 100"
          aria-hidden="true"
          role="img"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="transparent"
          ></rect>
          <g transform="matrix(0.99 0 0 -0.99 206.78 50.39)">
            <circle
              style={{ fill: "rgb(0,0,255)" }}
              cx="0"
              cy="0"
              r="35"
            />
          </g>
          <g transform="matrix(0.99 0 0 -0.99 124.48 50.55)">
            <circle
              style={{ fill: "rgb(0,128,0)" }}
              cx="0"
              cy="0"
              r="35"
            />
          </g>

          <g transform="matrix(0.99 0 0 -0.99 43.81 50.55)">
            <circle
              style={{ fill: "rgb(255,0,0)" }}
              cx="0"
              cy="0"
              r="35"
            />
          </g>
        </svg>{" "}
        <span>
          <abbr title="Red, Green, Blue">RGB</abbr>
        </span>
      </p>
      <Nav />
    </header>
  )
}

export default Header
