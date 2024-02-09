import React from 'react'
import { Card } from 'react-bootstrap';
import imge from './../../../media/Images/headerimage.jpg'

const Herosections = () => {
    return (
    
<>

<div className="container">
    <div className="row my-5">
        <div className="col-md-12 col-xs-12">
        <div className="card rounded-3">
           <img className="card-img rounded-3" src={imge} alt="imge" style={{height: '560px'}} />
      
           <div className="card-img-overlay">

           <div className="containter">
           <div className="row">
            <div className="col-md-5 col-xs-12">

            <div className="card_overlay_fornt">
            <div className="card px-4 py-4 ms-4">
            <Card.Text>
                <button type="button" class="btn btn-primary px-2 py-1">Technology</button>
                <h2 className='mt-2'>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                <div className='d-flex'>
               <img
                     src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                     alt='John Doe'
                     className='me-2 rounded-circle'
                     style={{ width: '25px', height: '25px' }}
               />
               <div>
              <p className='text-muted'>Mark Wood<small className='ms-2'>March 1, 2024</small></p>
               </div>
               </div>
                </Card.Text>
            </div>

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

<div className="container">
        <div className="row"></div>
        <div className="row my-5">
            <div className="col-md-3 col-xs-12"></div>
            <div className="col-md-6 col-xs-12 bg-light rounded-2 adss">
                <div className="ads pt-4 pb-2">
                <p className='text-center'>Advertisement</p>
                <p className='text-center fw-bold'>You can Place Ads</p>
                <p className='text-center'>750x100</p>
                </div>
            </div>
            <div className="col-md-3 col-xs-12"></div>
        </div>
      </div>

</>

    );
}
export default Herosections;
