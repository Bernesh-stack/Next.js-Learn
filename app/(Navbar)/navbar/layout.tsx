import React from "react";
const Navbar = ({children}:{children:React.ReactNode})=>{
    return(
        <div>
            <nav>Navbar</nav>
            {children}
        </div>
    )

}
export default Navbar;