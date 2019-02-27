import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 of Paul's Dev Blog - Go Lambda Labs!</p>
    <Link to="/">Go back to the homepage</Link>
    <></>
    <Link to="/page-3/">To Page 3</Link>
  </Layout>
)

export default SecondPage
