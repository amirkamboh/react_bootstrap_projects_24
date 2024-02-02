import React from 'react'
import { Container } from 'react-bootstrap';
import imge from './../../../media/Images/headerimage.jpg'

const Herosections = () => {
    return (
    <>
        <Container>
        <h4 className='text-center mx-5 my-5'>Blog Page</h4>
       {/*
        <nav aria-label="breadcrumb center">
         <ol class="breadcrumb">
          <li class="breadcrumb-item">Home</li>
          <li class="breadcrumb-item active" aria-current="page">Link One</li>
         </ol>
        </nav> */}
        <img src={imge} className="img-fluid" alt="" />
        </Container>
    </>
    );
}
export default Herosections
