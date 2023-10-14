'use client'

import { Poly } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const poly = Poly({
  weight: '400',
  subsets: ['latin'],
})

// TODO make the navbar slidein when scrolling down from top of homepage (hidden on initial load)
// TODO look into the overlay blurring if needed
export default function Navbar() {
  const [isActive, setIsActive] = useState(false)
  const [drawerHeight, setDrawerHeight] = useState(0)

  const pathname = usePathname()

  useEffect(() => {

    if (typeof window == undefined) {
      return
    }

    const updateNavHeight = () => {
      const newNavHeight = window.innerHeight
      setDrawerHeight(newNavHeight)
    }

    document.getElementById('overlay')!.classList.add('hidden')
    document.getElementById('drawer')!.classList.add('hidden')

    window.addEventListener('resize', updateNavHeight)
    updateNavHeight() // Initial calculation

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('resize', updateNavHeight)
    }
  }, [])

  useEffect(() => {
    setIsActive(false)
  }, [pathname])

  // opens and closes the nav drawer and overlay
  useEffect(() => {
    if (typeof window == undefined) {
      return
    }
    
    if (isActive) {
      // Disable scrolling
      const scrollPosition = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPosition}px`
      document.body.style.overflow = 'hidden'
    } else {
      // Re-enable scrolling
      const topValue = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, parseInt(topValue || '0', 10) * -1)
      document.body.style.overflow = ''
    }
  }, [isActive])

  function transitionEndHandler(e: HTMLElement) {
    // Note: display needs to be set before transition starts for opening
    //

    // remove from layout when close transition is done.
    if (!isActive) {
      e.classList.add('hidden')
    }
  }

  return (
    <div className="z-20 w-screen flex p-6 text-2xl items-center border-b-[1px] border-void-500 before:backdrop-blur-sm backdrop-blur fixed top-0 bg-void-950/50 lg:justify-around lg:grid lg:grid-cols-3">
      {/* Navbar */}
      
      <div className="lg:hidden">
      <Link style={poly.style} href="/">
        KRATOS
      </Link>
      </div>
      
      <Image
        onClick={() => {
          // remove the overrided display, before transition starts from state update
          document.getElementById('overlay')!.classList.remove('hidden')
          document.getElementById('drawer')!.classList.remove('hidden')

          setTimeout(() => {
            setIsActive(true)
          }, 0)
        }}
        className="w-8 h-8 absolute top-6 right-6 cursor-pointer select-none lg:hidden"
        src="/nav-btn.svg"
        alt=""
        width={32}
        height={32}
      />

      {/* Overlay */}
      <div
        id="overlay"
        onTransitionEnd={(e) => {
          transitionEndHandler(e.currentTarget)
        }}
        onClick={() => {
          setIsActive(false)
        }}
        className={`transition duration-300 w-screen h-screen fixed top-0 left-0 bg-void-950 backdrop-blur-sm ${
          isActive ? 'opacity-75' : 'opacity-0'
        }`}
      ></div>

      {/* Drawer */}
      {/* Consider moving this whole thing to server comp and pass as child */}
      <nav
        onTransitionEnd={(e) => {
          transitionEndHandler(e.currentTarget)
        }}
        id="drawer"
        style={{ height: drawerHeight }}
        className={`transition duration-300 text-white flex flex-col text-xl h-screen bg-black border-l-[1px] border-void-500 w-[80%] fixed top-0 right-0 ${
          isActive ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Home and singup button */}
        <div className="w-full p-8 pb-12 flex place-content-between items-center">
          <Link href="/" onClick={() => setIsActive(false)}>
            Home
          </Link>

          {/* Signup button */}
          <div
            onClick={() => {
              alert('clicked')
            }}
            className={`min-w-[10ch] p-[1px] w-fit text-base  rounded-full font-semibold bg-gradient-to-br from-cherry to-vinyl cursor-pointer`}
          >
            <div
              // TODO plug the inversion
              className={`p-3 text-center rounded-full select-none 'bg-transparent text-void-950`}
            >
              Sign Up
            </div>
          </div>
        </div>

        {/* Top Three options */}
        <Link
          href="/events/technical"
          onClick={() => {
            setIsActive(false)
          }}
          className="mx-8 mb-4"
        >
          Technical
        </Link>
        <Link
          href="/events/nontechnical"
          onClick={() => {
            setIsActive(false)
          }}
          className="mx-8 mb-4"
        >
          Non-Technical
        </Link>
        <Link
          href="/gallery"
          onClick={() => {
            setIsActive(false)
          }}
          className="mx-8 mb-4"
        >
          &apos;22 Gallery
        </Link>

        {/* Bottom two options */}
        <div className="absolute bottom-0 w-full mb-12">
          <div className="mx-8 mb-4">Contact</div>
          <div className="mx-8 mb-4">Contributors</div>
          <div className="mx-4 mt-4 h-[1px] bg-gradient-to-r from-cherry to-vinyl cursor-pointer" />
        </div>
      </nav>
     
         
         
         
         {/* <div className="justify-between"> */}

        {/* need to check */}
      <div className="hidden ">
      <Link style={poly.style} href="/">
        KRATOS
      </Link>
      </div>
         
        <div className="w-12/12 hidden  lg:block bg-void-700  h-12 rounded-full">
        {/* <div className=" "> */}
           <div className="mx-10 h-full flex flex-row text-xl justify-between">
           <div className=" self-center mr-7">
            Technical
           </div>
           <div className=" self-center mr-7">
            Non-Technical
           </div>
           
           <div className=" self-center ">
            Contributors
           </div>
           {/* </div> */}
           
        </div>
        </div>
            
        {/* </div>           */}

         
          <div>
          {/* </div>  */}
          {/* </div> */}
          
        <div className=" lg:block hidden lg:flex lg:justify-end">
         
         <div>
          <Image
            
            // remove the overrided display, before transition starts from state update
          className=" w-8 h-8  cursor-pointer select-none "
          src="/shopping_bag.svg"
          alt=""
          width={32}
          height={32}
        />
        </div>
          {/* hello */}
          </div>
        </div>
    </div>

    
  )
}
