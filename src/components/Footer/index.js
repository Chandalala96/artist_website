import React from 'react';
import './footer.css';

export default function Footer() {
    return(
        <>
        <br/>
        <br/>
              <section className='contact-form text-center'>
           <h2>Send Me An Email</h2>
               <div className='container' id="contact">
               <form action="https://formsubmit.co/trapslik96@gmail.com" method="POST">
				  <div className="mb-3 mt-3">
                  <input type="hidden" name="_next" value="https://trapslik-music.netlify.app" />
				    <label className="form-label">Email:</label>
				    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required/>
				  </div>
				  <div className="mb-3">
				    <input type="hidden" className="form-control" id="sub" placeholder="New Email" name="_subject"/>
				  </div>
				  <label>Message:</label>
                  <textarea className="form-control" rows="5" id="msg" name="message" required></textarea>
                  <br/>
				  <button type="submit" name="contact" className="btn btn-danger">Submit</button>
            </form>
               </div>
           </section>
           <br/>
        <footer className='mt-5'>
            <hr />
            <div className='container text-center'>
                <div className='row'>
                    <div className='col-sm-6 mt-4'>
                        <h3>Social Media</h3>
                        <a href="https://www.facebook.com/TrapSlik" target="blank" className='footer-link'><i className="bi bi-facebook"></i></a>
                        <a href="https://mobile.twitter.com/trapslik" target="blank" className='footer-link'><i className="bi bi-twitter"></i></a>
                        <a href="https://www.instagram.com/__trapslik/" target="blank" className='footer-link'><i className="bi bi-instagram"></i></a>
                    </div>
                    {/* <div className='col-sm-4 mt-4'>
                        <h3>News Letter</h3>
                        <form action="" method="POST">
				  <div className="mb-3 mt-3">
				    <label className="form-label">Email:</label>
				    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
				  </div>
                  <br/>
				  <button type="submit" name="contact" className="btn btn-danger">Subscribe</button>
            </form>
                    </div> */}
                    <div className='col-sm-6 mt-4'>
                    <a href="#top" className='footer-link'><i className="bi bi-arrow-up-square-fill mx-3"> TrapSlik</i></a>
                    </div>
                </div>
            </div>
            <p className='text-center mt-5'>Copyright 2022. All rights reserved TrapSlik. Developed By <a href="http://chandalalawebdev.com" target="blank">Chandalala</a></p>
        </footer>
        </>
        
        
    )
}