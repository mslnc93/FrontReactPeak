import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Div, Div2, H1, H3, Container, Para, Commentaires } from '../Style/FetchPost.style'
import Navbar from '../Navbar/Navbar'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { red } from '@mui/material/colors';
import { Link, useParams } from 'react-router-dom'
import { TextareaAutosize as Textarea } from '@mui/material';


function FetchOnePost() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})
    const params = useParams();

    console.log(params.postId);
    useEffect(() => {
        axios.get(`http://localhost:5000/post/${params.postId}`)
            .then((response) => {
                setLoading(false)
                setError()
                setPost(response.data)

            })
            .catch((error) => {
                setLoading(false)
                setError('Something went wrong')

            })
    }, []);

 const [userComment, setUserComment] = useState('');


    return (

        <Container>
            <React.Fragment>
                <Navbar />

                <H1></H1>
                <br />
                <div class='fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center'>

                    <Link to='https://twitter.com/?lang=fr'>

                        <TwitterIcon class='mt-5 h-8 fill-bleu-elec ' />

                    </Link>

                    <Link to='https://www.instagram.com/'>

                        <InstagramIcon class='mt-5 h-8 fill-bleu-elec  ' />

                    </Link>

                    <Link to='https://www.facebook.com/'>

                        <FacebookIcon class='mt-5 h-8 fill-bleu-elec   ' />

                    </Link>

                </div>

                <Div>
                    {/* C'est à l'intérieur de cette div qu'on mettra le contenu */}
                    <Div2>
                        <H1> {loading ? "loading" : post.titre}  </H1>

                        <br />
                        <H3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima illum iste explicabo aperiam molestias quis temporibus eveniet in,
                            natus tempore dolores a cumque eos consequatur voluptatem iusto veniam obcaecati ratione.</H3>
                        <br />
                        <br />
                        <br />
                        <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, saepe ipsa ea tempore at ex molestias
                            excepturi alias quidem doloremque eveniet, consequuntur dolorum eum molestiae voluptatem officia sequi expedita nam?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident ab deserunt ut nihil, esse assumenda explicabo,
                            a nam quod labore laboriosam asperiores illo incidunt libero quaerat dolores alias eveniet!</Para>
                        <img className='mt-16 w-full h-1/2' src={`http://localhost:5000/${post.imagenom}`} alt="Image du post" />
                    </Div2>
                </Div>

                <Commentaires>
                    <form action='http://localhost:5000/submit-comment' method='post'>
                        <Textarea className='w-3/4 text-green-elec ml-36 mt-12 bg-gray-800'
                            placeholder="Rédiger un commentaire..."
                            style={{ resize: 'none' }}
                            name='commentaires'
                            value={userComment}
                            onChange={(e) => setUserComment(e.target.value)}
                            minRows={2}
                            sx={{
                                '&::before': {
                                    display: 'none',
                                },
                                '&:focus-within': {
                                    outline: '2px solid var(--Textarea-focusedHighlight)',
                                    outlineOffset: '2px',
                                },
                            }}
                        />
                        <button type='submit'>Envoyer</button>
                    </form>
                </Commentaires>

            </React.Fragment>
        </Container>
    )
}

export default FetchOnePost