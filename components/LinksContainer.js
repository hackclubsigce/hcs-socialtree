import Linktab from "./Linktab";

const LinksContainer = ({ links }) => {
    return (
        <div className="linkBody" id='linkBody'>
          {links.map(element => {
            return (
              <Linktab key={element.name} element={element}/>
            )
          })}
        </div>
      );
}

export default LinksContainer