import React from "react";

function HeaderBar(props) {
    return(
        <nav>
            <div className="nav-wrapper black">
                <a href="/" className="brand-logo left">Clicky Game!</a>
                <div className="brand-logo right">Score:  | Top Score: </div>
            </div>
        </nav>
    )
}

export default HeaderBar;