import React from "react"
import { Link } from "gatsby"
import About from './About'
// import Image from "../components/image"


const IndexPage = () => {
  return (
    <div>
      <h1>Hello World of Gatsby</h1>
      
      <Link to='/About'>About</Link>
    </div>
  )

}

export default IndexPage
