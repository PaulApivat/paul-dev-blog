import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3 of Paul's Dev Blog - Go Lambda Labs!</p>
    <Link to="/">Go back to the homepage</Link>
    
  </Layout>
)

export default ThirdPage
