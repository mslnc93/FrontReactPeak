import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useReducer } from 'react';
import Accueil from './components/Accueil/Accueil';
import Inscription from './components/Inscription/Inscription';
import Connexion from './components/Connexion/Connexion';
import Navbar from './components/Navbar/Navbar';
import Produits from './components/Produits/Produits';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import ForumConseils from './components/ForumConseils/ForumConseils';
import FetchOnePost from './components/FetchOnePost/FetchOnePost';
import PostForm from './components/PostForm/PostForm';
import UpdatePost from './components/PostForm/UpdatePost';
import ProduitForm from './components/Produits/ProduitForm';
import './index.css';


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/navbar" element={<Navbar />} />
                <Route path="/produits" element={<Produits />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/forumconseils" element={<ForumConseils />} />
                <Route path="/postforum/:postId" element={<FetchOnePost />} />
                <Route path="/nouveaupost" element={<PostForm />} />
                <Route path="/modifierpost/:id" element={<UpdatePost />} />
                <Route path="/ajouterproduit" element={<ProduitForm />} />
            </Routes>
        </div>
    )



}



export default App
