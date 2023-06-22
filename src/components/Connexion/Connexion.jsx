import React from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'
import Navbar from '../Navbar/Navbar'
import Navbar0 from '../Navbar0/Navbar0'


function Connexion() {
    return (
        <React.Fragment>

<Navbar0/>
<Navbar/>
        <Container text>

            <h1>Connexion</h1>

            <Form action="http://localhost:5000/api/connexion" method="post">
                <Form.Field>
                    <label>Pseudo</label>
                    <input placeholder='Pseudo' name='pseudo' type='text' />
                </Form.Field>
                <Form.Field>
                    <label>Mot de passe</label>
                    <input placeholder='Mot de passe' name='mdp' type='password' />
                </Form.Field>

                <Button type='submit'>Submit</Button>
            </Form>

        </Container>
        </React.Fragment>
    )
}

export default Connexion