// import React, { useRef } from 'react';
import Link  from 'next/link';

const Tab = ({data}) => {
    // const { user, username, position } = props;
    // const path = `/${username}`;
    // const mouseOver = (e) => {
    //     try {
    //         name.current.style.opacity = 0;
    //         setTimeout(() => {
    //             name.current.style.display = "none";
    //             tabPosition.current.style.display = "block";
    //         }, 300);
    //         tabPosition.current.style.opacity = 1;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // const mouseOut = (e) => {
    //     try {
    //         name.current.style.opacity = 1;
    //         setTimeout(() => {
    //             name.current.style.display = "block";
    //             tabPosition.current.style.display = "none";
    //         }, 300);
    //         tabPosition.current.style.opacity = 0;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // const name = useRef("");
    // const tabPosition = useRef("");
    // console.log(data)
    const href = `/${data.username}`
    return (
        // <Link onMouseOver={mouseOver} onMouseOut={mouseOut} to={path} className="elements">
            // {/* <span ref={tabPosition} className="tab-position">{position}</span> */}
        <Link href={href} className="elements">
            <div className='elements'>
            <span className="name">
                <div>{data.user}</div>
            </span>
            <span className="tab-position">position</span>
            </div>
        </Link>
    );
};

export default Tab;