import React from 'react'

import './login.css'

const Login = () => {
  return (
    <div id='home'>
       <section className="flex relative overflow-hidden flex-col text-center h-fit w-full lg:mx-0 img1">
       <img src="/../images/login-background.jpg" alt="Bg-Img" className='h-screen' />
           <div className="content mb-5 absolute h-screen flex justify-center top-0 left-0 z-10 align-middle items-center w-full flex-col py-20 px-10 gap-5 ">
               {/* Logo Image */}
                <img src="/../images/cta-logo-one.svg" alt="Bg-Img" className='w-2/4 mb-3 block sm:w-2/4 md:w-2/4 img' />
                {/* Button */}
                <button class="px-6 py-2 text-lg tracking-widest upperase rounded shadow bg-blue-700 hover:bg-blue-400 h-12 w-1/3 text-white sm:w-2/3 md:w-2/3 btn">Get All In One</button>
                {/* Bottom Text */}
                <p className='w-2/4 text-lg para'>Get Premier Access to Raya and the Last Dragon for
                   an additional fee with a Disney+ subscription. As of
                   03/26/21, the price of Disney+ and The Disney Bundle
                   will increase by $1.</p>
                   <img src="/../images/cta-logo-two.png" alt="Bg-Img" className='h-12/4 w-2/4 mb-3 block img-btm' />
           </div>
       </section>
    </div>
  )
}

export default Login