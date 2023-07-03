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

  const handleDelete = (postId) => {
    axios.delete(`http://localhost:5000/post/delete/${posts._id}`)
      .then(response => {
        // Traitez la réponse réussie, par exemple, actualisez la liste des posts
        console.log('Post supprimé avec succès');
      })
      .catch(error => {
        // Traitez les erreurs, par exemple, affichez un message d'erreur
        console.error('Erreur lors de la suppression du post', error);
      });
  };

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
                      <Lien>Lire le poste</Lien>
                    </Item.Content>
                  </Link>
                  <form onSubmit={() => handleDelete(post._id)}>
                    <input type="submit" value="Supprimer" />
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