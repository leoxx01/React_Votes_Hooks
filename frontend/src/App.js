import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Spinner from './components/Spinner';
import Cadidates from './components/Cadidates';

export default function App() {
  const [candidates, setCandidates] = useState([])
  //const [intervall, setIntervall ]= useState(null)
  const interval = null
  
  useEffect(() => {
    
    const interval = setInterval(()=>{
      fetch('http://localhost:8080/votes').then(res=>{
        return res.json()
      }).then(json =>{
        setCandidates(json.candidates)
      })
    },1000)
    
  }, [])
    console.log(candidates)
    if (candidates.length === 0 ){
      return <Spinner description="Carregando..."/>
    }
    return(
      <div>
        <Header>Votação</Header>
        <Cadidates candidates={candidates}/>
      </div>
    )  
}
