import React from 'react';
import Header_Logo from './headerLogo';
import Header_Nav from './headerNav';
function Header(props) {
    return (<div className="navigation">
        <div className="container-fluid">
            <div className="row">
                <Header_Logo />
                <Header_Nav setPage={props.setPage}/>
            </div>
        </div>
    </div>);
}

export default Header;