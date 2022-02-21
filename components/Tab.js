import React, { useRef } from 'react';
import Link from 'next/link';

const Tab = ({data}) => {
    const mouseOver = (e) => {
        try {
            name.current.style.opacity = 0;
            setTimeout(() => {
                name.current.style.display = "none";
                tabPosition.current.style.display = "block";
            }, 300);
            tabPosition.current.style.opacity = 1;
        } catch (error) {
            console.log(error);
        }
    }
    const mouseOut = (e) => {
        try {
            name.current.style.opacity = 1;
            setTimeout(() => {
                name.current.style.display = "block";
                tabPosition.current.style.display = "none";
            }, 300);
            tabPosition.current.style.opacity = 0;
        } catch (error) {
            console.log(error);
        }
    }
    const name = useRef("");
    const tabPosition = useRef("");
    const href = `/${data.username}`
    return (
        // <Link href={href} className="elements">
        // {/* <span ref={tabPosition} className="tab-position">{position}</span> */}
        <Link href={href}>
            <div onMouseOver={mouseOver} onMouseOut={mouseOut} className='elements'>
                <span className="name">
                    <div ref={name}>{data.user}</div>
                </span>
                <span ref={tabPosition} className="tab-position">{data.position}</span>
            </div>
        </Link>
    );
};

export default Tab;