//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react'



const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ]

  const [searchTerm, setSearchTerm] = React.useState('React')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch}/>

      <hr />

      <List list={searchedStories}/>

      <Test />
    </div>
  );
}

const Search = ({search, onSearch}) => {
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={onSearch}/>

      <p>
        Searching for: <strong> { search} </strong>
      </p>
    </div>
  )
}

const List = ({list}) =>  (
  <ul>
    {list.map(({objectID, ...item}) => (
      <Item key={item.objectID} {...item} />
    ))}
  </ul>
)

const Item = ({objectID, title, url, author, num_comments, points}) => (
  <li>
    <span>
      <a href={url}>{title} </a>
    </span>
    <span> {author} </span>
    <span> {num_comments} </span>
    <span> {points}</span>

  </li>
)

//To do delete
const Test = () => {
  const user = {
    firstName : 'Robin',
    lastName: 'Weiruch'
  }

  //Without destructuring
  //const firstName = user.firstName
  //const lastName = user.lastName

  //With destructuring
  const {firstName, lastName} = user

  console.log(firstName, lastName)

  /**Nested destructuring */
  const user2 = {
    firstName3: 'Biro',
    pet: {
      name3: 'Fidel'
    }
  }

  //without nested destruturing
  const firstName2 = user2.firstName3
  const name2 = user2.pet.name3

  console.log('######################################')
  console.log(firstName2 + ' has a pet called ' +name2)

  //With nested destructuring
  const {
    firstName3,
    pet: {
      name3,
    },
  } = user2

  console.log('######################################')
  console.log(firstName3 + ' has a pet called ' + name3)

  //Javascript spread & Rest orperators
  console.log('######################################')
  console.log("# Javascript Spread & Rest Operators #")
  console.log('######################################')

  console.log('####        Spread       ###')
  const profile = {
    firstName: 'Robin',
    lastName: 'Weiruch'
  }

  const address = {
    country: 'Germany',
    city: 'Berlin'
  }

  //Spread
  const userSpread = {
    ...profile,
    gender: 'male',
    ...address
  }

  console.log(userSpread)

  //Rest
  console.log('####        Rest       ###')
  const userRest = {
    id: '1',
    firstName: 'Robin',
    lastName: 'Weiruch',
    country: 'Germany',
    city: 'Berlin',
  }

  const {id, country, city, ...userWithoutAddress} = userRest

  console.log(userWithoutAddress)
  console.log(id)
  console.log(city)
  

  
}

export default App
