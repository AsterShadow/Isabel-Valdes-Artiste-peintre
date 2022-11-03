import React from 'react';

import { Gallery } from '../container';

const Home = ({pieces}) => {
  return (
    <div>
        <Gallery pieces={pieces}/>
    </div>
  )
}

export default Home