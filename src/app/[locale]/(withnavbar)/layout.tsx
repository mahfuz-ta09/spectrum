import Navbar from "@/component/Navbar/Navbar"

const layout = ( {children} : { children : React.ReactNode} ) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}

export default layout