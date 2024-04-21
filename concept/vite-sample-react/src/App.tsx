import { useState } from 'react'
import sLogo from './assets/senpai.jpg'
import  Messages  from './componets/Messages'
import Lists from './componets/Lists'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let names = ["Mai Sakurajima", "Masayuki Hori", "Kakashi hatake"]


    const showList = ()  => {
        for (let i = 0; i < names.length; i++) {
            return <li className='leftlist'>{names}</li>
    }}

  return (
    <div>
      <img className='logo' src={sLogo} alt=""/>
      <Messages />
      {names.map(name => <li key={name}>{name}</li>)}

      <input type="text" placeholder='Enter a name' />
      <button type="submit">Submit</button>
    </div>
  )
}


export default App
