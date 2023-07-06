import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar';
import Navbar0 from '../Navbar0/Navbar0';

function Produits() {

    const initialState = {
        loading: true,
        error: '',
        produits: {}
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS': return {
                loading: false,
                produits: action.payload,
                error: ''
            }
            case 'FETCH_ERROR': return {
                loading: false,
                produits: {},
                error: 'Something went wrong !'
            }
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('http://localhost:5000/produits')

            .then(response => {
                console.log(response)
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR', payload: error })
            });
    }, [])


    return (
        <div>
            <Navbar0 />
            <Navbar />
            <div className='flex justify-center mx-auto w-3/4'>
                {state.loading ? 'Loading...' : state.produits.map(produit => {
                    return (



                        <div className='text-center flex-1 bg-white p-4 m-4 shadow-md'>
                            <div className="w-100 h-50 border rounded overflow-hidden mb-4">
                                <img src={produit.image} alt={produit.nom} className="w-full h-full object-cover" />
                            </div>
                            <h3> {produit.nom} </h3>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Produits