import React from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'

export default function contact() {
  return (
    <Container id='contact'>
        <Row>
            <Col>
                <h2 className='mt-3'>Get in touch</h2>
                <p>Ask something or project requests,<b>Reach out me</b></p>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name :</Form.Label>
                        <Form.Control type='text' placeholder='Enter your name'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email :</Form.Label>
                        <Form.Control type='email' placeholder='Enter your email'></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message :</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder='message' />
                    </Form.Group>
                    <Button className='primary mb-3'>Submit</Button>
                </Form>
            </Col>
            <Col style={{marginTop:'12%' , marginLeft:'12%'}}>
                <h2>Contact me</h2><br />
                <p> <b>Address:</b> No 29, Rathamatiya Rd, Rikillagaskada</p>
                <p> <b>Phone:</b> +94 763854229 </p>
                <p> <b>Email:</b> menuramaneth12@gmail.com</p>
            </Col>
        </Row>
    </Container>
  )
}
