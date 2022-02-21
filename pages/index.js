import Navbar from '../components/Navbar'
import Tab from '../components/Tab'
import User from '../public/Data';
export const getStaticProps = async () => {
  let data = [];
  for (let i = 0; i < User.length; i++) {
    data.push(User[i])
  }
  return {
    props: {
      data
    }
  }
}


export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <Navbar />
      <div className='py-4 elementContainer'>
        {
          User.map(forEach => {
            return (
              <Tab key={forEach.username} data={forEach} />
            )
          })
        }
      </div>
    </>
  )
}
