import React from 'react'
import Latestblog from '../home/Components/latestblog';
import Bloghero from './blogcomponents/bloghero';
import Ads from '../home/Components/ads';
import Learnmore from './blogcomponents/learnmore';

const Blog = () => {
  return (
    <>
      <Bloghero />
      <br/>
      <Latestblog />
      <Learnmore />
      <Ads />
    </>
  )
}

export default Blog;
