import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Navbar0 from '../Navbar0/Navbar0'
import axios from 'axios'

function Accueil() {


  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [produits, setProduits] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/produits')
      .then((response) => {
        setLoading(false)
        setError('')
        setProduits(response.data)
      })
      .catch((error) => {
        setLoading(false)
        setError('Something went wrong')

      })
  }, [])


  return (
    <div>
      <Navbar />
      <Navbar0 />

      {/* hero */}

      <div className="px-4 py-12 bg-gray-800 relative mt-8" style={{ height: '600px' }}>
        <img
          // src="Images/post2.jpg" // Remplace par le chemin vers ton image
          alt="Image du Hero"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4 text-white text-center">Titre du Hero</h1>
          <p className="text-xl text-white text-center">Description du Hero</p>
        </div>
      </div>


      {/* Best sellers cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        <h2 className='font-poppins font-bold'>Best Sellers</h2>


        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg flex flex-col">
              <img
                src="Images/firstpost.jpg" // Remplace par le chemin vers ton image
                alt="Image du produit"
                className="object-cover"
              />
              <div className="px-4 py-4 flex-grow">
                <h3 className="text-xl font-semibold mb-2">produit.nom</h3>
                <p className="text-gray-700">produit.prix</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Nouveautés cards */}

      <div className="max-w-6xl mx-auto px-4 py-12">

        <h2 className='font-poppins font-bold '>Nouveautés</h2>

        <div className="flex flex-wrap -mx-4 ">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg flex flex-col">
              <img
                src="Images/post3.jpg" // Remplace par le chemin vers ton image
                alt="Image du produit"
                className="object-cover"
              />
              <div className="px-4 py-4 flex-grow">
                <h3 className="text-xl font-semibold mb-2">Titre du produit</h3>
                <p className="text-gray-700">Prix</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  );

}

export default Accueil