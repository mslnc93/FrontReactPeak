import React, { useEffect, useState } from 'react'
import Navbar from '../NavbarForum/NavbarForum'
import { Div, Image, Titre, DivBody, P, H1, Lien } from '../Style/ForumConseil.style'
import { Link } from 'react-router-dom'
import "../Style/styleLibrary.css"
import { Item } from 'semantic-ui-react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import axios from 'axios'




function ForumConseils() {


  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then((response) => {
        setLoading(false)
        setError('')
        setPosts(response.data)
      })
      .catch((error) => {
        setLoading(false)
        setError('Something went wrong')

      })
  }, [])


  return (

    <React.Fragment>
      <Navbar />

      <DivBody>

        <Div>

          <div class='fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center'>

            <Link to='https://twitter.com/?lang=fr'>

              <TwitterIcon class='mt-5 h-8 fill-red-700 ' />

            </Link>

            <Link to='https://www.instagram.com/'>

              <InstagramIcon class='mt-5 h-8 fill-red-700 ' />

            </Link>

            <Link to='https://www.facebook.com/'>

              <FacebookIcon class='mt-5 h-8 fill-red-700  ' />

            </Link>
          </div>


          <H1>Forum privé</H1>


          <Item.Group>
            {posts.map(post => {
              return (
                <Item>
                  <Link className='w-full flex' to='/postforum'>
                    <Image src={`http://localhost:5000/${post.imagenom}`} />
                    <Item.Content className='w-full flex flex-col justify-between'>  {/* le style est dans le stylelibrary.css */}
                      <Titre>{post.titre}</Titre>
                      <P>
                        {post.resume}
                      </P>

                      <Lien>Lire le poste </Lien>
                    </Item.Content>

                  </Link>

                  <form action={`http://localhost:5000/post/delete/${post._id}?_method=DELETE`} method="post">
                    <input type="hidden" name="_method" value="DELETE" />

                    <button className='absolute flex ml-5 mt-20 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded' type="submit"
                    >Supprimer</button>
                  <Link to={`/modifierpost/${post._id}`}><button className='absolute flex ml-5 mt-40 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded'>Modifier</button></Link>
                  </form>



                </Item>
              )

            })}

          </Item.Group>
        </Div>

      </DivBody>

    </React.Fragment>
  )

}







export default ForumConseils