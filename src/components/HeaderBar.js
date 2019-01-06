import React from "react";

function HeaderBar(props) {
    return(
        <nav>
            <div className="nav-wrapper black">
                <a href="/" className="brand-logo left">Clicky Game!</a>
                <div className="brand-logo right">Score: {Score} | Top Score: {TopScore}</div>
            </div>
        </nav>
    )
}

export default HeaderBar;