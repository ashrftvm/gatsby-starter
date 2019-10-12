import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
        quia ullam possimus enim odio laboriosam tempore sint aspernatur atque
        maxime!
      </p>
      <p>
        Contact me at{" "}
        <a
          href="https://twitter.com/ashrftvm"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ashrftvm
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
