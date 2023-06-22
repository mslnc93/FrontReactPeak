import React from 'react'
import { Form, Input, TextArea, Button, Select, Container } from 'semantic-ui-react'
import Navbar from '../Navbar/Navbar'
import Navbar0 from '../Navbar0/Navbar0'



function Contact() {

    return (




        <React.Fragment>
            
            <Navbar0/>
            <Navbar/>

            <Container>
                <Form action="http://localhost:5000/api/contact" method="post">
                    <h1>Contactez-nous</h1>

                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Pseudo'
                            placeholder='Pseudo'
                            name='pseudo'
                        />

                    </Form.Group>
                    <Form.Field
                        id='form-input-control-error-email'
                        control={Input}
                        type='email'
                        label='Email'
                        placeholder='Veuillez insérer votre adresse e-mail'
                        name='email'

                    />
                    <Form.Field type='textarea'
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Votre message'
                        placeholder='Insérez votre message'
                        name='message'
                    />
                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Envoyer'
                        type='submit'

                    />
                </Form>

            </Container>
        </React.Fragment>
    )
}

export default Contact