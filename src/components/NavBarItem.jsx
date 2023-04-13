"use strict"

import Link from 'next/link'
import React from 'react'


export default function NavBarItem({title, param}) {
  return (
    <div>
        <Link
        className= "m-4 hover:text-amber-600 font-semibold p-2 "
          href={`/?genre=${param}`}
          >{title}
        </Link>
    </div>
  )
}



