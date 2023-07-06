import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


function ProduitForm() {

    const [file, setFile] = useState(null);
    const [nom, setNom] = useState('');
    const [prix, setPrix] = useState('');
    const [categorie, setCategorie] = useState('');
    const [stock, setStock] = useState('');
    const [imagenom, setImageNom] = useState('');
    const navigate = useNavigate();

    const handleNomChange = (event) => {
        setNom(event.target.value);
      };

    const handlePrixChange = (event) => {
        setPrix(event.target.value);
      };
    const handleCategorieChange = (event) => {
        setCategorie(event.target.value);
      };
    const handleStockChange = (event) => {
        setStock(event.target.value);
      };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setImageNom(event.target.files[0].name)
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (file) {
          const formData = new FormData();
          formData.append('nom', nom);
          formData.append('prix', prix);
          formData.append('categorie', categorie);
          formData.append('stock', stock);
          formData.append('file', file);
          formData.append('imagenom', imagenom);
          console.log(formData);
    
          axios.post('http://localhost:5000/submit-product', formData)
            .then(response => {
              console.log(response.data)
              return navigate('/produits')
            })
            .catch(err => {
              console.log(err);
            })
    
        }
      };



    return (

    <form onSubmit={handleSubmit}>
      <div>
        <label>Image :</label>
        <input
          type="file"
          onChange={handleFileChange}
        />
      </div>
      <div>
        <label>Nom :</label>
        <input
          type="text"
          name="nom"
          onChange={handleNomChange}
        />
      </div>
      <div>
        <label>Prix :</label>
        <input
          type="text"
          name="prix"
          onChange={handlePrixChange}
        />
      </div>
      <div>
        <label>Catégorie :</label>
        <input
          type="text"
          name="categorie"
          onChange={handleCategorieChange}
        />
      </div>
      <div>
        <label>Stock :</label>
        <input
          type="text"
          name="stock"
          onChange={handleStockChange}
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
    )
}

export default ProduitForm