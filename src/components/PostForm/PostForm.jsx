import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostForm() {
  const [file, setFile] = useState(null);
  const [titre, setTitre] = useState('');
  const [resume, setResume] = useState('');
  const [contenu, setContenu] = useState('');
  const [imagenom, setImageNom] = useState('');
  const navigate = useNavigate();


  const handleTitreChange = (event) => {
    setTitre(event.target.value);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.value);
  };

  const handleContenuChange = (event) => {
    setContenu(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setImageNom(event.target.files[0].name)
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('titre', titre);
      formData.append('contenu', contenu);
      formData.append('resume', resume);
      formData.append('file', file);
      formData.append('imagenom', imagenom);
      console.log(formData);

      axios.post('http://localhost:5000/submit-post', formData)
        .then(response => {
          console.log(response.data)
          return navigate('/forumconseils')
        })
        .catch(err => {
          console.log(err);
        })

    }
  };



  return (

    <form onSubmit={handleSubmit}>
      <label>Titre :</label>
      <input type="text" name='titre' onChange={handleTitreChange} />

      <label>Résumé :</label>
      <input type="text" name='resume' onChange={handleResumeChange} />

      <label>Contenu :</label>
      <input type="text" name='contenu' onChange={handleContenuChange} />

      <label>Image :</label>
      <input type="file" onChange={handleFileChange} />

      <button type='submit'>Soummetre</button>
    </form>

  )
}

export default PostForm