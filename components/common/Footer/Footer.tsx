import Link from 'next/link'
import React from 'react'

function Footer():JSX.Element {
    return (
        <div className="bg-gray-800 max-w-screen-xl mx-auto text-white xl:px-16 grid grid-cols-4 ">
          <div className="flex flex-col">
              <h1>Links</h1>
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
          </div>
          <div className="flex flex-col">
              <h1>Address</h1>
              <p>Dhaka,Bangladesh</p>
          </div>
          <div className="flex">
              <h1>Social Media</h1>
          </div>
        </div>
    )
}

export default Footer
