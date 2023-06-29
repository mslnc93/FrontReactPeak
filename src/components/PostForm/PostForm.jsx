import React from 'react'

function PostForm() {



  return (

<form action="http://localhost:5000/submit-post" method='POST'>
    <label>Titre :</label>
    <input type="text" name='titre'/>

    <label>Résumé :</label>
    <input type="text" name='resume'/>

    <label>Contenu :</label>
    <input type="text" name='contenu'/>

    <label>Image :</label>
    <input type="file" name='imageNom'/>

    <button type='submit'>Soummetre</button>
</form>
    
  )
}

export default PostForm