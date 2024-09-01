import React, { Component } from 'react'
import IntroductionSection from './IntroductionSection'
import ProductCard from './ProductCard'

export class Home extends Component {
  render() {
    return (
      <div className='my-4'>
        <IntroductionSection/>
        <ProductCard/>
      </div>
    )
  }
}

export default Home