import './home.css';
import NewMusicImg from './images/art.jpg';
import tourImg from './images/pic2.jpg';
import merch1 from './images/merch1.png';
import merch2 from './images/merch2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicSlider from './musicSlider';
import GallerySlider from './gallerySlider';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
       <main>
           <section className='hero-section'>
           <div className='container-fluid first-banner'>
           </div>
           </section>
           <section className='newMusic-section'>
           <div className='container mt-5 p-3 newMusic-container'>
                <h2 className='text-center'>Latest Music</h2>
                <div className='row mt-3'>
                <div className='col-sm-6'>
                    <img src={NewMusicImg} className='img-fluid newMusicImg' alt="music" />
                </div>
                <div className='col-sm-6 text-center newMusicText'>
                    <div className='music-title mt-5'>
                    <p>TrapSwiitch Out Now!!!</p>
                    </div>
                    <Link to='/music' className='btn btn-danger newMusicLink'>Check it out now</Link>
                </div>
                </div>
          </div>
           </section>
           <br/>
           <br/>
           {/* <hr style={{color:'white'}} /> */}
           <section className='about-section mt-5'>
               <article className='container text-center'>
                   <h2>About</h2>
                   <p className='first-p'>TrapSlik is a HipHop artist from Zambia born on the 24th of October 1996.
                                            He was born on the Copperbelt province in Kitwe City,
                                            he spent his early childhood moving back and forth from Kitwe to Lusaka but moved back to Kitwe permanently when 
                                            he was about 9 years old <Link to='/about'>Read more...</Link> 
                      </p>
               </article>
           </section> 
           <hr style={{color:'white'}} className="mt-3" />
           <section className='newMusic-section'>
           <div className='container mt-5 p-3 newMusic-container'>
                <h2 className='text-center'>Events & Tours</h2>
                <div className='row mt-3'>
                <div className='col-sm-6'>
                    <img src={tourImg} className='img-fluid newMusicImg' alt="tour" />
                </div>
                <div className='col-sm-6 text-center newMusicText'>
                    <div className='music-title mt-5'>
                    <p>No events at the moment</p>
                    </div>
                </div>
                </div>
          </div>
           </section>
           <section className='mt-1'>
               <div className='container text-center'>
               <MusicSlider />
               <br /> 
               <Link to='/music' className='btn btn-danger galleryLink'>Listen Now</Link>
               </div>
           </section>
           <hr style={{color:'white'}} className="mt-3" />
           <section className='merch-section'>
               <div className='container text-center'>
                   <h2>Merch Coming Soon</h2>
                   <div className='row'>
                   <div className='col-sm-6'>
                   <img src={merch1} className='img-fluid newMusicImg mt-4' alt="merch" />
                   </div>
                   <div className='col-sm-6'>
                   <img src={merch2} className='img-fluid newMusicImg mt-4' alt="merch" />
                   </div>
                   </div>
               </div>
           </section>
           <section className='mt-5'>
               <div className='container text-center'>
               <GallerySlider />
               <br />
               <Link to='/gallery' className='btn btn-danger galleryLink'>View Gallery</Link>
               </div>
           </section>
           <hr style={{color:'white'}} className="mt-3" />
     
       </main>
    )
}