import PageTitle from "../components/PageTitle"

function About() {
  return (
    <>
      <PageTitle title="About | RGB" />
      <div className="container flow">
        <h1>About</h1>
        <p>
          This is a simplifed version of my rendering of the{" "}
          <a
            href="https://github.com/chrisnajman/vanlife"
            target="_blank"
            rel="noopener noreferrer"
            className="link-external bold"
          >
            Scrimba Vanlife Project
          </a>
          , demonstrating various aspects of{" "}
          <span className="bold">React Router Dom V.6</span>.
        </p>
      </div>
    </>
  )
}

export default About
