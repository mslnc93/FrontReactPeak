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
            <Navbar/>

            <h1>Accueil</h1>

            {state.loading ? 'Loading...' : state.produits.map(produit => {
                return (
                    <React.Fragment>
                        <h3>{produit.nom}</h3>
                        <p>{produit.description}</p>
                    </React.Fragment>
                )
            })}

        </div>
    )
}
export default Produits