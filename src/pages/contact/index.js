import React from 'react'
import { Card } from 'react-bootstrap';
import Latestblog from '../home/Components/latestblog';
import Latestpost from '../home/Components/latestpost';

const Contact = () => {
  return (
    <>
        <div className="container">
            <div className="profile bg-light rounded-3">
              <div className="row px-4 py-4 mt-4">
                
              <div className="row">
            <div className="col-md-4 col-xs-12"></div>
            <div className="col-md-4 col-xs-12">
              
            <Card.Text className='ms-4'>
                 <div className='d-flex ms-5'>
               <img
                     src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                     alt='John Doe'
                     className='me-2 rounded-circle'
                     style={{ width: '45px', height: '45px' }}
               />
               <div>
              <p className='fw-bold para mt-3'>M Aamir Kamboh</p>
              <p className='text-muted para'>React Js and Blogger</p>
               </div>
               </div>
                </Card.Text>

            </div>
            <div className="col-md-4 col-xs-12"></div>
          </div>

          <div className="row mt-2">
            <div className="col-md-3 col-xs-12"></div>
            <div className="col-md-6 col-xs-12">
            <p className='text-center'>Meet M Aamir, a Passionate writer and blogger with 
            a love for technology and travel. Aamir holds a degree in Computer Science and has spent years working in the 
            tech industry, gaining a deep understanding of the impact technology has on 
            our lives every days. The event celebrated numerous cultures in various ways at diverse dates.</p>
            </div>
            <div className="col-md-3 col-xs-12"></div>
          </div>

          <div className="row">
            <div className="col-md-5 col-xs-12"></div>
            <div className="col-md-2 col-xs-12">
            <i class="fa-brands fa-square-facebook px-1"></i>
            <i class="fa-brands fa-square-twitter px-1"></i>
            <i class="fa-brands fa-square-instagram px-1"></i>
            <i class="fa-brands fa-square-youtube px-1"></i>
            </div>
            <div className="col-md-5 col-xs-12"></div>
          </div>

              </div>
            </div> 
        </div>
        <br/>
        <Latestpost />
        <Latestblog />
        <br/>
    </>
  )
}

export default Contact;
