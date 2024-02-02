import React from 'react'
import './../../style/min.css'
import footerlog from './../../media/Images/FooterLog.png'

const Footer = () => {
  return (
    <>
      <div className="main-footer bg-light mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-6 mt-5">
                <h6 className='fw-bold'>About</h6>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ratione aspernatur dolore, impedit nesciunt omnis quod ducimus 
                        labore rem inventore veritatis culpa iste tempora quae ipsam.
                     </p>
                     <small><span className='fw-bold'>Email : </span>xyz@gmail.com</small><br/>
                     <small><span className='fw-bold'>Phone : </span>88090836296431</small>
                </div>
                <div className="col-md-4 col-sm-6 mt-5">

                    <div className="row">
                    <div className="col-md-2 col-sm-6"></div>    
                    <div className="col-md-4 col-sm-6">
                     <h6 className='fw-bold'>Quick Links</h6>
                     <ul className='list-unstyled'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Archived</li>
                        <li>Author</li>
                        <li>Contact</li>
                     </ul>
                </div>


                    <div className="col-md-4 col-sm-6">
                     <h6 className='fw-bold'>Category</h6>
                     <ul className='list-unstyled'>
                        <li>Lifestyle</li>
                        <li>Technology</li>
                        <li>Travel</li>
                        <li>Business</li>
                        <li>Economy</li>
                        <li>Sports</li>
                     </ul>
                     </div>
                     <div className="col-md-2 col-sm-6"></div> 
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mt-5">
                    <div className="card">
                        <h5 className='text-center pt-4'>Weekly Newsletter</h5>
                        <p className='text-center'>Get Blog Article and Offer via Email</p>
                        <input className='mx-4 mt-2 mb-1 rounded-1 border border-light px-2' type='text' placeholder='Your Email'></input>
                        <button className='bg-primary text-white border-0 rounded-1 mx-4 mt-0 mb-4'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-md-12 col-xs-12"><hr/></div>
            </div>
            <div className="row">
                <div className="col-md-4 col-xs-6">
      <div className='d-flex'>
      <img
        src={footerlog} 
        alt='Meta'
        style={{ width: '60px', height: '60px' }}
      />
      <div>
        <h6 className='mt-2'>Meta<span className='fw-bold'>Blog</span></h6>
        <p>JS Template 2024. All Rights Reserved.</p>
      </div>
    </div>
                </div>
                <div className="col-md-4 col-xs-6"></div>
                <div className="col-md-4 col-xs-6">
                    <div className="row">
                        <div className="col-md-4 col-xs-6">Terms of Use</div>
                        <div className="col-md-4 col-xs-6">Privacy Policy</div>
                        <div className="col-md-4 col-xs-6">Cookie Policy</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
