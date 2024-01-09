import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './header.css'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuopened, setOpened] = useState(false)
  return (
    <div className='header'>
      <img src={logo} alt="" className='logo' />
      {(menuopened === false && mobile === true) ? (
        <div style={{backgroundColor:'var(--appColor)',
        padding:'0.5rem',
        borderRadius:'5px'
        }}
        onClick={()=>setOpened(true)}
        
        >
          <img src={Bars} alt=""style={{width:'1.5rem',height:'1.5rem'}} />
        </div>
      ) : <ul className='header-menu'>
        <li >
          <Link onClick={()=> setOpened(false)}
          to='home'
          span={true}
          smooth={true}
          >Home</Link></li>
        <li>
          <Link onClick={()=> setOpened(false)}
          to='programs'
          span={true}
          smooth={true}
          >programs</Link></li>
        <li >
          <Link onClick={()=> setOpened(false)}
          to='reasons'
          span={true}
          smooth={true}
          >Why US</Link></li>
        <li>
          <Link onClick={()=> setOpened(false)}
          to='plans'
          span={true}
          smooth={true}
          >Plans</Link></li>
        <li ><Link 
        onClick={()=> setOpened(false)}
        to='testimonials'
        span={true}
        smooth={true}>Testimonials</Link></li>
      </ul>}

    </div>
  )
}

export default Header