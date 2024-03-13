//!react-bootstrap ten CourseCard componenti
//!

import React from 'react'
import { Container, Col, Card, Row, Button } from "react-bootstrap";
import data from '../data'
import { useNavigate } from 'react-router-dom';
const CourseCard = () => {
  const navigate=useNavigate()
  return (
    <Container className='text-center'>
      <Row>

        {

          data.map(({ img, name, text, id }) => {
      

            return (

              <Col className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"
                key={id}>
                <Card stlye={{ width: "18rem" }}>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button
                    onClick={()=> navigate(`/courses/${name}`)}
                     variant='info' className="btn btn-secondary">DETAILS</Button>
                  </Card.Body>
                </Card>
              </Col>

            )


          })
        }
      </Row>
    </Container>
  )
}

export default CourseCard