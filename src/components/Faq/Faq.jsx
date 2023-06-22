import React, { useState } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import Navbar from '../Navbar/Navbar';
import Navbar0 from '../Navbar0/Navbar0';





function Faq() {
    const [activeIndex, setActiveIndex] =
        useState(null)
    const handleClick = (index) => {


        const newIndex = activeIndex === index ? -1 : index

        setActiveIndex(newIndex)
    };
    return (
        <Accordion fluid styled>
            <React.Fragment>
            <Navbar0/>
            <Navbar/>

            <h1>Foire aux questions</h1> <br/>
            <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={() => handleClick(0)}
            >
                <Icon name='dropdown' />
                Quels sont vos délais de livraison ?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
                <p>
                    Nous livrons entre 2 à 5 jours selon le mode de livraison que vous avez choisis.
                </p>
            </Accordion.Content>

            <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={() => handleClick(1)}
                >
                <Icon name='dropdown' />
                Comment suivre ma commande ?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
                <p>
                    Un lien de suivi de commande vous est envoyé quelques heures après la finalisation de votre commande.
                </p>
            </Accordion.Content>

            <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={() => handleClick(2)}
                >
                <Icon name='dropdown' />
                Vos produits sont-ils naturels ?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
                <p>
                    Nous utilisons uniquement des arômes végétaux et naturels.
                </p>

            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 3}
                index={3}
                onClick={() => handleClick(3)}
                >
                <Icon name='dropdown' />
                Quel est l'origine des matières premières de vos produits ?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
                <p>
                    Il est rare de connaître le nom des fournisseurs des matières premières des suppléments que l'on consomme.
                    Mais rassurez-vous, nous n'utilisons que des matières premières de très haut de gamme dont la qualité est 
                    garantie par les leaders mondiaux.
                </p>

            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 4}
                index={4}
                onClick={() => handleClick(4)}
                >
                <Icon name='dropdown' />
                Comment retourner un produit ?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
                <p>
                    Vous disposez de 14 jours pour retourner un produit. Veuillez noter que les compléments 
                    alimentaires ne pourront être retournés que si les scellés n'ont pas été retirés.
                </p>

            </Accordion.Content>
                </React.Fragment>
        </Accordion>
    )
}

export default Faq