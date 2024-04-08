import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';


const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center py-3 justify-content-md-center'>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/d/d2/Birla_Institute_of_Technology_Mesra.png"
            center
            style={{ width: '70px', height: '70px' }}
          />
          <br />
          Copyright &copy; Birla Institute of Technology

        </Col>
      </Row>
    </Container>

  )
}

export default Footer
