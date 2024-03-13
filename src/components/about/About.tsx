// import React from 'react'
// import { GetDateNow } from '../../functions/Utility'

import { UrlServer } from "../services"

const About =() =>{
  return (
    <>
      <div className='details'>       
          <section className="ease-communication-overview e-pd-y-20">
          <div className="e-row">
            <iframe src={UrlServer + '/pdf/productfile/menual.pdf'} width="100%" height="950px" ></iframe>
          </div>     
          </section>
      </div>    
      
    </>
    )
}

export default About
