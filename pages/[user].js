import Link from "next/link";
import Image from "next/image";
import User from "../public/Data"
import LinksContainer from "../components/LinksContainer";

const UserPage = ({ data }) => {
    return (
        <>
          <Link href="/" className="p-4 closeContainer"><i className="fas fa-times"></i></Link>
          <div className="linkHeader">
            <div className="image">
              <img src={data.img} alt={data.user} />
            </div>
            <div className="name">
              {data.user}
            </div>
          </div>
          <div className="position">{data.position}</div>
          <div className="domains">
            {
              data.domains.map(domain => {
                return (
                  <span key={domain}>{domain}</span>
                )
              })
            }
          </div>
          <LinksContainer links={data.links} />
        </>
      );
}

export default UserPage

export const getStaticPaths = () => {
    let paths = User.map((item) => {
        return {
            params:{
                user: item.username,
            },
        }
    });
    console.log(paths.length)
    return{
        paths:paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
  let data;
  for (let i = 0; i < User.length; i++) {
      if(User[i].username === context.params.user){
          data = User[i];
      }   
  }
    return{
        props:{
            data
        }
    }
}