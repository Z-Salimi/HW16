import { PropsWithChildren } from 'react'

import Footer from './Footer'
import Navbar from './Navbar'

interface Props {
  title?: string,
  transparent?: boolean
}

const Layout = (props: PropsWithChildren<Props>) => {


  return (

    <div>
    
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
      <header>
        {/* <Navbar transparent={true} /> */}
      </header>
      <main>
        {props.children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout