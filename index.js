import React from "react";
import ReactDom from "react-dom/client"
import { BrowserRouter,Routes,Route,Link } from "react-router";
import Home from "./src/Home";
import Contact from "./src/Contact";
import Dashboard from "./src/Dashboard";
import Details from "./src/Details";
import Zero from "./src/Zero";
import Hello from "./src/Hello";
import Hi from "./src/Hi";
import Github from "./src/Github";
function App(){

    return(
        // start routing here
        <>
        <BrowserRouter>
        <nav>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/Contact">Contact</Link>
            <Link className="link" to="/Dashboard">Dashboard</Link>
            <Link className="link" to="/Details">Details</Link>
            <Link className="link" to="/Github">Github</Link>
        </nav>
        {/* Routes ke bahar wale har page par show honge */}
        {/* Routes ke andar ka ek hi page chalega */}
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
            <Route path="/Details" element={<Details/>}>
            {/* index wala details ke sath automatic by default aa jayega jab hame by default kisi info ko dekhana ho*/}
            <Route index element={<Zero/>}></Route>
            <Route path="Hello" element={<Hello/>}></Route>
            {/* / lagane se vo root level se search karna start karta hai */}
            <Route path="Hi" element={<Hi/>}></Route>
            </Route>

            <Route path="/Github" element={<Github/>}>
            <Route index path="/Github/:name"></Route></Route>
        </Routes>
        </BrowserRouter>

        </>
    ) 
}


ReactDom.createRoot(document.getElementById("root")).render(<App/>)