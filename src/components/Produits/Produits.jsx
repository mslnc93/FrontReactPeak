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
            <div className='flex flex-wrap justify-center mx-auto w-3/4 space-x-4  space-y-4'>
                {produits.map(produit => {
                    return (
                        <div className='text-center w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 shadow-md border border-gray-200 '>
                            <div className="rounded overflow-hidden mb-4 flex justify-center items-center">
                                <Link to='/'><img src={`http://localhost:5000/${produit.imagenom}`} alt={produit.nom} className="w-auto h-auto object-cover max-h-40" /></Link>
                            </div>
                            <h4> {produit.nom} </h4>
                            <h2> {produit.prix} </h2>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Produits