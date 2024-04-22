import { children } from "react"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
function Layout(){
    return(
<div className="flex flex-col min-h-screen">
    <Nav/>
    <Footer/>
</div>
    )
}
export default Layout