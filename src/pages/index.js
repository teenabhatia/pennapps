import * as React from "react"
import Landing from "../images/landing-background.png"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'



const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        src="../images/banner.png" 
        alt="Banner"
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={200}
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage