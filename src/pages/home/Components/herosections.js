import React from 'react'
import { Card } from 'react-bootstrap';
import imge from './../../../media/Images/headerimage.jpg'

const Herosections = () => {
    return (
      
<div className="container">
    <div className="row mt-5">
        <div className="col-md-12 col-xs-12">
        <div className="card rounded-3">
           <img className="card-img rounded-3" src={imge} alt="imge" style={{height: '480px'}} />
      
           <div className="card-img-overlay">

           <div className="containter">
           <div className="row">
            <div className="col-md-6 col-xs-12">

            <div className="card_overlay">
            <Card.Text>
                <button type="button" class="btn btn-primary px-2 py-1">Technology</button>
                <h2 className='text-white mt-2'>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                <div className='d-flex'>
               <img
                     src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                     alt='John Doe'
                     className='me-2 rounded-circle'
                     style={{ width: '25px', height: '25px' }}
               />
               <div>
              <p className='text-white'>Mark Wood<small className='ms-2'>March 1, 2024</small></p>
               </div>
               </div>
                </Card.Text>
            </div>

            </div>
            <div className="col-md-6 col-xs-12"></div>
        </div>
       </div>

            </div>
           </div>
        </div>
    </div>
</div>

    );
}
export default Herosections
