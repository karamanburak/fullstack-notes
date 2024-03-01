import React from 'react';
import {data} from '../helpers/data';
import {Col, Container, Form, Row} from 'react-bootstrap';
import PlayerCard from './PlayerCard';
import { useState } from 'react';

const CardContainer = () => {
    const [search, setSearch] = useState("")

    
    //^ 1. yol
    // let dizi= data
    // dizi=dizi.filter((a)=> a.name.includes(search))
    // console.log(data);
  return (
    <>
          <Form.Control 
          className='w-50 m-auto' 
          type="search" 
          placeholder="Search Player" 
          onChange={(e)=>setSearch(e.target.value)}
          />
    <Container className='card-container p-3 rounded-4 my-4'>
        <Row className='g-3 justify-content-center'>
        {/* {dizi.map((player,index)=>{ */}
                  {data.filter((item) => item.name.toLowerCase().includes(search.trim().toLowerCase())).map((player,index)=>{
            return(
                <Col 
                key={index}
                 md={6} 
                 lg={4} 
                 xl={3}>
                    {/* <PlayerCard player={player}/> */} 
                    <PlayerCard {...player} />

                </Col>
            )
        })}
        </Row>
    </Container>

    </>
  )
}

export default CardContainer