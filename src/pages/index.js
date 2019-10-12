import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>
        I am Asif, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        obcaecati.
      </h2>

      <p>
        Need a Developer?
        <Link to="/contact">Contact Me</Link>
      </p>
    </div>
  )
}

export default IndexPage
