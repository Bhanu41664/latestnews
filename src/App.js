import React, { Component } from 'react'
import Nav from './components2/Nav'
import NewsItem from './components2/NewsItem'
import News from './components2/News'

export default class  extends Component {
  c='john'
  render() {
    return (
      <div>
       <Nav>
       </Nav>
  
      <News    pagesize={6} />
      
    
       
      </div>
    )
  }
}
