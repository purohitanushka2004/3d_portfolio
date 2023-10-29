import React from 'react'
import Resume_anushka from '../assets'
const CTA = () => {
  return (
    <Motion.div className='cta'>
        <a href={Resume_anushka} download className='btn'>Download Resume</a>
        {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
    </Motion.div >
  )
}

export default CTA