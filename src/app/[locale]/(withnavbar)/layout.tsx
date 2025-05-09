import Navbar from "@/component/Navbar/Navbar"
import '../../globals.css'

const layout = ( {children} : { children : React.ReactNode} ) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}

export default layout