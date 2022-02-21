const Linktab = ({ element }) => {
    return (
        <>
            <a href={element.link} className={element.class} rel="noreferrer" target="_blank">
                <div className="icon"><i className={element.icon}></i></div>
                <div className="link">{element.name}</div>
            </a>
        </>
    );
}

export default Linktab