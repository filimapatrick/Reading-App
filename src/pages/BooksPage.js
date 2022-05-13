import React from 'react';
import Card from '../components/Card';
import {FaSearch} from 'react-icons/fa'


function BooksPage() {
  return (
    <> 
    <div className='header'>
        <div className='row1'>
<h1>A room without books is like <br/> a body without a soul</h1>
        </div>
        <div className='row2'>
          <h2>find your book</h2>
          <div className='search'>
            <input type='text' placeholder='Search'/>
            <button><FaSearch/></button>
          </div>
          <img src='./books10.jpeg' alt='books'/>
          </div>
          
    </div>
    <div className='container'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </>
  )
}

export default BooksPage