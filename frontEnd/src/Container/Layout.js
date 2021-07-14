import NavBar from "../Component/Navbar"

const  Layout =({children})=>{
    return(
        <>
        <NavBar/>
        {children}
        </>
    )
}
export default Layout