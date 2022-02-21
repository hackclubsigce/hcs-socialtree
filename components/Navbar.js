import React, { useState, useEffect, useRef } from 'react';
// import '../App.css'

const Navbar = (props) => {
    const { check } = props;
    const [query, setQuery] = useState("");
    const input = (e) => {
        setQuery(e.target.value.toLowerCase());
    }
    useEffect(() => {
        check(query.toLowerCase())
    }, [query]);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="text-white align-items-center d-flex justify-content-between w-100">
                    <h5 className='m-0 brand'>SocialTree</h5>
                    <form className="inputParent">
                        <i className="bi bi-people-fill"></i>
                        <input type="text" autoComplete='off' onChange={input} id="searchUser" placeholder="Search User..." />
                        <button type="button" onClick={input}>
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
