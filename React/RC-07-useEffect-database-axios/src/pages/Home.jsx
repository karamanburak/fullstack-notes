import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddBilgi from '../components/AddBilgi';
import BilgiList from '../components/BilgiList';

const Home = () => {
const [tutorials, setTutorials] = useState([])

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  //^GET (READ)\\

  const getTutorials = async() => {
  const veri = await axios.get(url)
  // console.log(veri.data);
  setTutorials(veri.data)
  }

  //!then zinciriyle de yazabilirsiniz
  // useEffect(()=>{
  // axios.get(url).then((res) => setTutorials(res.data))},[])

useEffect(()=>{

  getTutorials()
},[])

  return  <>

<AddBilgi/>
<BilgiList tutorials={tutorials}/>
    </>

}

export default Home