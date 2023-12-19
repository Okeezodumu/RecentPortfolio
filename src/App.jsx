import React from 'react'
import './index.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide:2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const App = () => {
  React
  return (
    <div className='container m-auto'>

      <section className='lg:flex-col  md:mx-20 float-left p-4 rounded-xl  bg-gray shadow-black shadow-xl m-10  animate-bounce ' >
        <h2 className=' text-white font-bold lg: text-2xl md: text-xl text-center '> Okopi <font>Johnson</font> Odumu</h2>
        <h1 className=' text-white text-center lg:text-5xl md: text-xl text-center font-bold '><font>Soft</font>ware <font>Dev</font>eloper and <font> Eng</font>ineer</h1>
        <p className='text-white text-center'>Nothing is impossible if you are willing to learn, inovate and build</p>

      </section>
      <div className='flex clear-both justify-center gap-5 m-2 ' >
        <a href="https://www.linkedin.com/in/odumu-okopi-370354245?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKzgrLHKASrm5tJ%2FJlqU%2FMQ%3D%3D"><img className='w-10 ' src="/linkedin.svg" alt="" /></a>
        <a href="https://github.com/Okeezodumu"><img className='w-10 ' src="/github.svg" alt="" /></a>
        <a href="https://twitter.com/okeezdupi2"><img className='w-10 ' src="/x-social-media-logo-icon.svg" alt="" /></a>
    <a href="https://drive.google.com/file/d/1lg-p571BR3nrWMQRmT-Q15e8EcUOYGHU/view?usp=drive_link"><button className='bg-black text-white shadow-xl shadow-gray-dark lg:p-5 md: p-2 rounded-xl  hover:bg-gray-dark'>Download my CV</button></a> 
      </div>
      
      <section className='flex-col p-2  m-auto'>
       <div className=''>
        <h1 className='text-black lg:text-5xl  md: text-2xl text-center m-3' >About Me</h1>
        <h2 className='text-gray lg:text-3xl text-center md: text-1xl text-bold  leading-relaxed italic'>I am a creative Frontend developer with zeal for uniqueness,efficiency and innovation. I am a team player with an eye for beauty and functionality. </h2>
       </div>
        
      <div className='flex justify-center p-5 ' >
        <img className='lg:w-1/2 md: w-2/3   m-2 grayscale' src="/HEZ_8694-removebg.png" alt="" />
      </div>
      </section>
      <section className='flex-col m-5 mx-20'>
        <img className=' lg:hidden md: visible h-32 m-auto saturate-200' src="/Group (2).png" alt="" />
        <h1 className='lg:text-5xl md:text-xl text-black text-center underline'> Skills </h1>

        <div className='flex gap-10 justify-center my-10 animate-pulse saturate-200'>
          <img className='lg:h-24 md: h-12' src="/HTML 5 logo.svg" alt="" />
          <img className='lg:h-24 md: h-12' src="/Css logo.svg" alt="" />
          <img className='lg:h-24 md: h-12' src="/js logo.svg" alt="" />
          <img className='lg:h-24 md: h-12' src="/Git-Icon-1788C 1.png" alt="" />
        </div>
        <div className='flex gap-10 justify-center   my-10 animate-pulse'>
          <img className='lg:h-24 md: h-12' src="/React logo.svg" alt="" />
          <img className='lg:h-24 md: h-12' src="/Node js logo.png" alt="" />
          <img className='lg:h-24 md: h-12' src="/mongodb logo.png" alt="" />
          <img className='lg:h-24 md: h-12' src="/SQl logo.svg" alt="" />
        </div>

      </section>
      <section className='flex justify-center align-items-center'>
        <div className='flex'>

        </div>
      </section>
      <h1 className='lg:text-6xl p-5 md:text-xl text-black text-center whitespace-20'>Projects</h1>


      <Carousel infinite={true} autoPlay={this !== "mobile" ? true : false} className='saturate-150 h-2xl w-full shadow-xl shadow-black  rounded-2xl' responsive={responsive}>

        <div className='mx-5 shadow-xl shadow-blue'><img src="/Bookme1.jpg" alt="" /></div>
        <div className='mx-5 shadow-xl shadow-blue'><img src="/Bookme2.jpg" alt="" /></div>
        <div className='mx-5 shadow-xl shadow-blue'><img src="/Bookme3.jpg" alt="" /></div>
        <div className='mx-5 shadow-xl shadow-green'><img src="/Brill1.jpg"  alt="" /></div>
        <div className='mx-5 shadow-xl shadow-green'><img src="/Brill2.jpg"  alt="" /></div>
        <div className='mx-5 shadow-xl shadow-green'><img src="/Brill3.jpg" alt="" /></div>
        <div className='mx-5 shadow-xl shadow-pink'><img src="/cruise1.jpg"  alt="" /></div>
        <div className='mx-5 shadow-xl shadow-pink'><img src="/cruise2.jpg"  alt="" /></div>
        <div className='mx-5 shadow-xl shadow-pink'><img src="/cruise3.jpg" alt="" /></div>
      </Carousel>;
    </div>


  )

}


export default App
