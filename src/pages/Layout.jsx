
import Footer from "../components/Footer"
import Nav from "../components/Nav"
function Layout({children}){
    return(
<div className="flex flex-col min-h-screen">
    <Nav/>
    <main className="flex-1 mt-[10vh]">{children}</main>
    <Footer/>
</div>
    )
}
export default Layout