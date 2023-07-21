import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar';
import Navbar0 from '../Navbar0/Navbar0';
import { Link } from 'react-router-dom';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid';


function Produits() {

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
            <Navbar0 />
            <Navbar />
            <h1 className='text-center font-poppins'>Découvrez nos produits</h1>
            <div className="mx-auto max-w-6xl px-2 mt-12">
                <div className="flex flex-wrap -mx-4">
                    {produits.map((produit) => (
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                            <div className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
                                <div className="overflow-hidden">
                                    <Link to="/">
                                        <img
                                            src={`http://localhost:5000/${produit.imagenom}`}
                                            alt={produit.nom}
                                            className="w-full h-56 object-contain"
                                        />
                                    </Link>
                                </div>

                                {/* <Link to={`/modifierpost/${produit._id}`}>
                                    <button className='absolute flex ml-52 mt-2 text-orange-600 font-bold py-2 px-4 rounded'>
                                        <PencilSquareIcon className="h-4 w-4" />
                                    </button>
                                </Link>

                                <button className='absolute flex ml-52 mt-12 font-bold text-red-600 py-2 px-4 rounded' type="submit">
                                    <TrashIcon className="h-4 w-4" />
                                </button> */}


                                <h4 className="text-xl font-bold mt-2 mb-2 text-center">{produit.nom}</h4>
                                <h2 className="text-lg font-medium text-center my-0">{produit.prix}€</h2>

                                <div className="mt-4">
                                    <button className="w-4/5 mx-auto mb-4 block px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors duration-300">
                                        Ajouter au panier
                                    </button>
                                    <button className="w-4/5 mx-auto block px-4 py-2 text-white bg-green-elec rounded-md hover:bg-green-500 transition-colors duration-300">
                                        Acheter
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>






        </div>
    )
}
export default Produits