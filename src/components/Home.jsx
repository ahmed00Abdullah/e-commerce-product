import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

const Home = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then(json => setProduct(json)).catch(err => console.error('Error fetching data: ', err));
  }, [])


  return (
    <>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Products</h1>
      <Row>
        {
          product.map((item) => (
            <Col lg={3} md={4} sm={6} key={item.id} style={{height:'500px'}}>
              <div className="product" style={{padding:"5px", background:"#eee"}}>
                <img src={item.image} alt="images" style={{width:'100%',height:'300px'}} />
              <h3>{item.title.slice(0, 17)}..</h3>
              <div className="d-flex justify-content-between align-items-center p-3">
                <p>Price: {item.price}$</p>
              <p>Rate {item.rating.rate}</p>
              </div>
              </div>
              
            </Col>
          )

          )
        }

      </Row>
    </>

  )
}

export default Home