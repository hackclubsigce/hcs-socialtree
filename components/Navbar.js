// import React, { useState, useEffect, useRef } from 'react';
// import '../App.css'

const Navbar = (props) => {
    // const { check } = props;
    // const [query, setQuery] = useState("");
    // const input = (e) => {
    //     setQuery(e.target.value.toLowerCase());
    // }
    // // useEffect(() => {
    // //     check(query.toLowerCase())
    // // }, [query]);
    // const brand = useRef()
    // const inputParent = useRef()
    // const icon = useRef()
    // const handleSearch = () => {
    //     inputParent.current.classList.toggle('animateSearch')
    //     brand.current.classList.toggle('animateBrand')
    //     icon.current.classList.toggle('bi-x-lg')
    // }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="text-white align-items-center d-flex justify-content-between w-100">
                    <h5 className='m-0 brand'>SocialTree</h5>
                    <form className="inputParent">
                        <i className="bi bi-people-fill"></i>
                        <input type="text" autoComplete='off' id="searchUser" placeholder="Search User..." />
                        <button type="button">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                    <button type="button" className='toggleBtn'>
                        <i className="bi bi-search text-white"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
