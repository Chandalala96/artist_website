import React from 'react';
import './about.css';
import Image from '../Home/images/img1.png';
 

export default function About() {
    return(
        <>
            <section className='about-section mt-5'>
            <div className='container text-center'>
                <h1>About <i className="bi bi-file-earmark-person-fill"></i></h1>
                <br />
                <div className="row">
                    <div className='col-sm-6'>
                    <article className='container text-center'>
                    <p className='first-p'>TrapSlik is a HipHop artist from Zambia born on the 24th of October 1996 whose.
                                            He was born on the Copperbelt province in Kitwe City,
                                            he spent his early childhood moving back and forth from Kitwe to Lusaka but moved back to Kitwe permanently when 
                                            he was about 9 years old. TrapSlik went to Chiwala Technical High School in Ndola where he completed his Secondary 
                                            Education and went on to study Computer Sytems Engineering at Northern Technical College. TrapSlik developed an 
                                            interest in music at the tender age of 7 years old, his uncle and older cousin who were staying in the same house
                                            as him at that time would listen to artists like Nas, 2 Pac, Notorious B.I.G, Nelly, G-unit and many other rappers
                                            therefore exposing TrapSlik to HipHop at an early age though he started rapping later on when he was about 13 years
                                            old.He had his first studio session when he was featured on his cousin's song,who then convinced TrapSlik to
                                                consider taking music seriously.By the time TrapSlik was about 16 years old he was part of a HipHop crew called
                                                "DGE" where they worked on a couple of songs and were set to drop a mixtape that unfortunately was never
                                                released, he was popularly known in his high school as a rapper and used to go by the name Young Slik,
                                                he would rap during variety shows, debate contests and other high school events.After TrapSlik completed 
                                                High School he continued to create music and later on when he went to college he decided to pursue a
                                                    professional music career, he released his first official solo single on SoundCloud titled "Started"
                                                    in 2016 and the following year released another single called "No Manners" which gained him a little bit
                                                    of recognition.He then went on to release more singles on Soundcloud such as "Lean & Chill", "No Hook",
                                                    "Drastic" and more. TrapSlik is currently working on more music and is set to drop his debut
                                                        mixtape which will be announced to his fans later on.   
                   </p>
            </article>
                    </div>
                    <div className='col-sm-6'>
                       <img src={Image} alt="trapslik" className='img-fluid' id="abt-img" />
                    </div>
                    </div>
                </div>
         
        </section>
        </> 
    )
}