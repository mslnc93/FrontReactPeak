import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../NavbarForum/NavbarForum';
import { useNavigate } from 'react-router-dom';


function UpdatePost() {

    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState('');
    const [titre, setTitre] = useState('');
    const [resume, setResume] = useState('');
    const [contenu, setContenu] = useState('');
    const [imagenom, setImagenom] = useState('');
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:5000/post/${params.id}`)
        .then((response) => {
            setLoading(false)
            setError('')
            setPost(response.data)
            setTitre(response.data.titre)
            setResume(response.data.resume)
            setContenu(response.data.contenu)
            setImagenom(response.data.imagenom)
        })
        .catch(error => {
            setLoading(false)
            setError('Something went wrong')
            setPost({})
            })
    }, [])


    const handleTitreChange = (e) => {
        setTitre(e.target.value)
    }

    const handleResumeChange = (e) => {
        setResume(e.target.value)
    }

    const handleContenuChange = (e) => {
        setContenu(e.target.value)
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setImagenom(e.target.files[0].name)
    }
        
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
                setFileDataURL(result)
            }
            fileReader.readAsDataURL(file);
        };
        
    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('titre', titre);
            formData.append('resume', resume);
            formData.append('contenu', contenu);
            formData.append('imagenom', imagenom);
        
        axios.put(`http://localhost:5000/post/edit/${params.id}`, formData)
            .then(response => {
                console.log(response.data);
                return navigate('/forumconseils')
            })
            .catch(err => {
                console.log(err)
            })
        }
    }




    return (
        <form onSubmit={handleSubmit} method='post'>
            <input type="hidden" name='_method' value="PUT" />

            <Navbar />

            <label>Titre :</label>
            <input type="text" name='titre' value={titre} onChange={handleTitreChange} />

            <label>Résumé :</label>
            <input type="text" name='resume' value={resume} onChange={handleResumeChange} />

            <label>Contenu :</label>
            <input type="text" name='contenu' value={contenu} onChange={handleContenuChange} />

            <label>Image :</label>
            <input type="file" onChange={handleFileChange} />

            <button type='submit'>Confirmer</button>
        </form>
    )
}

export default UpdatePost