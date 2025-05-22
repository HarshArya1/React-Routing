// jis bhi page ko nested routing karne ho toh
import { Link, Outlet } from "react-router"
export default function Details(){

    return(
        <>
        <nav>
        <Link className="link" to={"Hello"} >Hello</Link>  
        <Link className="link" to={"Hi"} >Hi</Link>
        </nav>
        <h1>Welcome to Details Page</h1>
        <Outlet></Outlet> 
        {/* used for catch ki ab aage kis children par jana hai */}
        {/* outlet ke postion jaha hoge child route page ke content vahi show honge yaah h1 ke baad content how hoga*/}
        </>
    )
}