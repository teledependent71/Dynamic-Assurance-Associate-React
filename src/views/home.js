import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Assurance Associate</title>
        <meta property="og:title" content="Dynamic Assurance Associate" />
      </Helmet>
    </div>
  )
}

export default Home
