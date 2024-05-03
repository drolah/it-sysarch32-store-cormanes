import Header from './Header.jsx'
import './index.css'
import {db} from './config/firebase.js'
import { useState, useEffect } from 'react'
import {getDocs, collection} from 'firebase/firestore'

function App() {
  const [computerList, setComputerList] = useState([])

  const computerCollectionRef = collection(db, "computers")

  useEffect(() => {
    const getComputerList = async() => {
      try{
        const data = await getDocs(computerCollectionRef)
        console.log(data)
      }catch(err){
        console.error(err)
      }
    };

    getComputerList()
  },[])

  return (
    <>
      <Header/>
    </>
  )
}

export default App
