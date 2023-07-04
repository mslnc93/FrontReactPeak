import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../NavbarForum/NavbarForum';


function UpdatePost() {

    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState('');
    const [titre, setTitre] = useState('');
    const [resume, setResume] = useState('');
    const [contenu, setContenu] = useState('');
    const [imagenom, setImagenom] = useState('');

    useEffect(()=>{
        axios.get(`http://localhost:5000/post/${params.id}`)
        .then((response)=>{
            setLoading(false)
            setError('')
            setPost(response.data)
            setTitre(response.data.titre)
            setResume(response.data.resume)
            setContenu(response.data.contenu)
            setImagenom(response.data.imagenom)
        })
        .catch(error=>{
            setLoading(false)
            setError('Something went wrong')
            setPost({})
        })
    }, [])


    const handleTitreChange  = (e) =>{
        setTitre(e.target.value)
    }
    const handleResumeChange  = (e) =>{
        setResume(e.target.value)
    }
    const handleContenuChange  = (e) =>{
        setContenu(e.target.value)
    }
    const handleImagenomChange  = (e) =>{
        setImagenom(e.target.value)
    }




  return (
    <form action={`http://localhost:5000/post/edit/${params.id}?_method=PUT`} method='post'>
    <input type="hidden" name='_method' value="PUT" />

    <Navbar />

    <label>Titre :</label>
    <input type="text" name='titre' value={titre} onChange={handleTitreChange} />

    <label>Résumé :</label>
    <input type="text" name='resume' value={resume} onChange={handleResumeChange} />

    <label>Contenu :</label>
    <input type="text" name='contenu' value={contenu} onChange={handleContenuChange} />

    <label>Image :</label>
    <input type="file" value={imagenom} onChange={handleImagenomChange} />

    <button type='submit'>Confirmer</button>
  </form>
  )
}

export default UpdatePost