import React from 'react';
import logo from './logo.png' ;
import Image from 'next/image'
import Link from 'next/link';
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import github from '../../public/Logo/github.png'
import menu from '../../public/Logo/menu.png'
import malt from '../../public/Logo/malt.png'
import linked from '../../public/Logo/linked.png'
import logoV from '../../public/Logo/vtcolor.svg'
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
function Navbar() {


  const [isOpen, setIsOpen] = useState(false);

  return (<>
    <div className='row'>
      <div className='d-flex'>
      <div className='col text-left mt-4'>
      <Image width={50} className="m-2 inline-flex" src={github} />
      <Image width={50} className="m-2 inline-flex" src={linked} />
      <Image width={50} className="m-2 inline-flex" src={malt} />
      </div>
      <div>
        <Image width={80} className="m-4 inline-flex" src={logoV} />
      </div>
      <div className='col text-right mt-4'>
      <p class="lato fw-bold text-light spacing-minus inline-flex m-2"><Link href="/">accueil</Link></p>
      <p class="lato fw-bold text-light spacing-minus inline-flex m-2"><Link href="/creations">creations</Link></p>
      <p class="lato fw-bold text-light spacing-minus inline-flex m-2"><Link href="/">moi</Link></p>
      </div>
      </div>

    </div></>



  );

  
  
}

export default Navbar;