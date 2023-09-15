import React from 'react'

export default function Social() {
    return (
        <div className="socialContainer">

            <div>
              <img onClick={()=> window.open("https://github.com/krzysztofmilek", "_blank")} className='img_stack' src="https://img.icons8.com/ios-filled/50/cccccc/github.png" alt='GITHub' />
            </div>
            <div>
                <img src="https://img.icons8.com/dotty/40/cccccc/vertical-line.png" alt="" />

            </div>
            <div>
              <img onClick={()=> window.open("https://www.linkedin.com/in/krzysztof-mi%C5%82ek-010694198/", "_blank")} className='img_stack' src="https://img.icons8.com/ios-glyphs/60/cccccc/linkedin-circled--v1.png" alt='Linkedin' />
            </div>
            <div>
                <img src="https://img.icons8.com/dotty/40/cccccc/vertical-line.png" alt=""   />
            </div>
            <div>
                <img  onClick={()=> window.open("https://www.facebook.com/krzysztof.milek", "_blank")} className='img_stack' src="https://img.icons8.com/ios-filled/50/cccccc/facebook-new.png" alt='Facebook' />
            </div>
            <div>
                <img src="https://img.icons8.com/dotty/40/cccccc/vertical-line.png" alt=""  />
            </div>
            <div>
                <img onClick={()=> window.open("https://www.youtube.com/channel/UCDK0ZRhllZS0vHPuolF98fA", "_blank")}  className='img_stack' src="https://img.icons8.com/ios-filled/50/cccccc/youtube-play.png" alt='Youtube' />
            </div>
           
       


        </div>
    )
}
