import React from 'react';
import { songList } from './songList';
import './music.css';

export default function Music() {
    const mappedSongs = songList.map((item) => {
        return    <div className='col-sm-4 mt-5' key={item.songId}>
                 <iframe 
        title={item.songId}
         width="80%" 
         height="300" 
         scrolling="no" 
         frameBorder="no"
          allow="autoplay"
           src={item.url}></iframe>
              </div>
        
    })
    return(
        <>
            <section className='mt-5'>
                <div className='container text-center'>
                    <h1>Music <i className="bi bi-file-music-fill"></i></h1>
                    <div className='row'>
                        
                    {mappedSongs}
        
                </div>
           </div>
                
        </section>
        </> 
    )
}