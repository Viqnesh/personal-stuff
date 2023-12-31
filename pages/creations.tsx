import Image from 'next/image'
import Navbar from '../app/components/Navbar' ;
import 'bootstrap/dist/css/bootstrap.css'
import '../app/globals.css' ;
import { motion } from "framer-motion"
import Link from 'next/link';
import { useState } from 'react'

import LogoV from '../public/Logo/VT - Color.svg'
import symfony from '../public/icons-lang/symfony.png'
import react from '../public/icons-lang/react.png'
import boot from '../public/icons-lang/boot.svg'
import js from '../public/icons-lang/js.webp'
import html from '../public/icons-lang/html.png'
import css from '../public/icons-lang/css.png'
import maps from '../public/icons/maps.png'
import nxtcloud from '../public/icons/nxt.png'
import video from '../public/icons/video.png'
import trophy from '../public/icons/trophy.png'
import joystick from '../public/icons/gaming.png'
import perso from '../public/badges/perso.png'
import pro from '../public/badges/pro.png'


import { TypeAnimation } from 'react-type-animation';
const langs = [
  symfony,
  react,
  boot,
  js,
  html,
  css
]
export default function Creations() {
  return (<div className='container-fluid'>
      <div className="container">
        <Navbar></Navbar>
        <div className="px-4 text-center">
          <div className='title mt-4 fw-bold lato text-center'>
            CREATIONS
          </div>
          </div>
      </div>
          <div className="w-100">
    
          <div className="text-center mt-5">
              <div className="row justify-content-center">
                
              <div className='strip'>

                  <Link href="/geocode">
                  <div className="allergo m-1">
                  </div>
                  <Image src={maps} className="icon-genre" />
                  <h5 className="title-project lato">GEOCODING</h5>
                  </Link>
              </div>
              <div className='strip'>
                  <Link href="/vtube">
                  <div className="vtube m-1">
                  </div>
                  <Image src={video} className="icon-genre" />
                  <h5 className="title-project lato">VTUBE</h5>
                  </Link>
                  </div>
                  <div className='strip'>           
                  <Link href="/filewatcher">
                  <div className="coding m-1">
                  </div>
                  <Image src={nxtcloud} className="icon-genre" />
                  <h5 className="title-project lato">FILES WATCHER</h5>
                  </Link>
                  </div>
                  <div className='strip'>   
                  <Link href="/tournament">
                  <div className="ladder m-1">
                  </div>
                  <Image src={trophy} className="icon-genre" />
                  <h5 className="title-project lato">TOURNAMENT</h5>
                  </Link>
                  
                  </div>
                <div className="row justify-content-center mt-3">
                  <div className='strip'>  
                  <Link href="/game">
                  <div className="ladder m-1">
                  </div>
                  <Image src={joystick} className="icon-genre" />
                  <h5 className="title-project lato">GAME</h5>
                  </Link>
                  </div>
                </div>
              </div>

          </div>          
          </div>
          </div>
  )
}
