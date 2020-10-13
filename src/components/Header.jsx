import React from 'react';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-custom">
            <div className="collapse navbar-collapse">
                <img src={require('../assets/images/congar.png')} alt='logo'/>

                <form className="form-inline ml-auto">
                    <input type="text" className="form-control mr-sm-2" placeholder="Search"/>
                </form>
            </div>
        </nav>
    )
}
