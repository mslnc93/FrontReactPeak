import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar';
import Navbar0 from '../Navbar0/Navbar0';
import { Link } from 'react-router-dom';

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
                                <h4 className="text-xl font-bold mt-4">{produit.nom}</h4>
                                <h2 className="text-lg font-medium">{produit.prix}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>






        </div>
    )
}
export default Produits