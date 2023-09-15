import React from 'react';
import '../App.css';
import express from '../img/express.png'
import mongodb from '../img/mongodb.png'

export default function Stack() {
    return (
        <div className="stackContainer">
            <p className="mainStack">STACK</p>

            <div>
                <img className="img_stack" src="https://img.icons8.com/ios-glyphs/60/cccccc/react.png" alt='React' />
            </div>
        
         
            <div>
                <img className="img_stack" src={express} alt='Express' />

                </div>
      

            <div>
                <img className="img_stack" src="https://img.icons8.com/windows/50/cccccc/node-js.png" alt='nodeJS' />
                </div>
      
            <div>
                <img className="img_stack" alt='MongoDB' src={mongodb} />
            </div>
              
           <div>
                <img className="img_stack" src="https://img.icons8.com/ios/50/cccccc/javascript--v1.png" alt="JavaScript" />
            </div>
         <div>
                <img className="img_stack" src="https://img.icons8.com/ios/50/cccccc/css3.png" alt='CSS3' />
            </div>
            <div>
                <img className="img_stack" alt='HTML5' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/cccccc/external-HTML-5-social-media-tanah-basah-basic-outline-tanah-basah.png" />
            </div>
       

            <div>
                <img className='img_stack' src="https://img.icons8.com/ios-filled/50/cccccc/redux.png" alt='REDUX' />
            </div>
            <div>
                <img className='img_stack' src="https://img.icons8.com/windows/96/cccccc/bootstrap.png" alt='BOOTSTRAP' />

            </div>

            <div>
                <img className='img_stack' src="https://img.icons8.com/ios/50/cccccc/sass.png" alt='SASS' />
            </div>
            <div>
                <img className='img_stack' src="https://img.icons8.com/ios-glyphs/60/cccccc/wordpress--v1.png" alt='WORDPRESS' />
            </div>
            <div>
                <img className='img_stack' src="https://img.icons8.com/ios-glyphs/60/cccccc/api-settings.png" alt='REST API' />

            </div> 



        </div>
    )
}
