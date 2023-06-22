import React from 'react'
import { Button, Form, Container, } from 'semantic-ui-react'
import Navbar from '../Navbar/Navbar'
import Navbar0 from '../Navbar0/Navbar0'


function Inscription() {
    return (
        
        <React.Fragment>

            <Navbar0 />
            <Navbar/>

            <Container text>

                <h1>Inscription</h1>


                <Form action="http://localhost:5000/api/inscription" method="post">
                    <Form.Field>
                        <label>Pseudo</label>
                        <input placeholder='Pseudo' type='text' name='pseudo' />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Email' type='email' name='email' />
                    </Form.Field>
                    <Form.Field>
                        <label>N° portable</label>
                        <input placeholder='N° portable' type='tel' name='num' />
                    </Form.Field>
                    <Form.Field>
                        <label>Mot de passe</label>
                        <input placeholder='Mot de passe' type='password' name='mdp' />
                    </Form.Field>

                    <Button type='submit'>S'inscrire</Button>
                </Form>
            </Container>
        </React.Fragment>

    )
}

export default Inscription