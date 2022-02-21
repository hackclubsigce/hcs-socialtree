import Navbar from '../components/Navbar'
import Tab from '../components/Tab'
import Head from 'next/head';
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
  const check = (query) => {
    let elements = document.getElementsByClassName('elements');
    for (let i = 0; i < elements.length; i++) {
        let flag = elements[i].innerText.toLowerCase().includes(query);
        elements[i].classList.toggle('hidden', !flag)
    }
}
  return (
    <>
    <Head>
      <title>HCS-SocialTree</title>
    </Head>
      <Navbar check={check} />
      <div className='py-4 elementContainer'>
        {
          User.map(forEach => {
            return (
              <Tab key={forEach.username} user={data.user} position={data.position} data={forEach} />
            )
          })
        }
      </div>
    </>
  )
}
