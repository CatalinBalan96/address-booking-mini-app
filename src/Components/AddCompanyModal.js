import React, { useState } from 'react'
import {Button, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form,FormGroup, Label, Input} from 'reactstrap';

const AddCompanyModal = (props) => {

    //Company initial Form State
    const initalFormState = {
        name: '',
        phone: '',
        address: ''
    }
    
   const [company, setCompany] = useState(initalFormState) 
    //Company Input FIelds Change
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setCompany({...company, [name]: value})
    }

    //Modal toggle
    const[modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <div>
            <Button className={props.className} color="info" onClick={toggle}>{props.addButtonText}</Button> 
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    Adauga Companie
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={(event) => {
                        event.preventDefault();
                        if(!company.name || !company.phone || !company.address) return
                        props.addCompany(company)
                        setCompany(initalFormState)
                        toggle(!modal)
                    }}>
                        <FormGroup row>
                            <Label for="name" sm={2}>Nume:</Label>
                            <Col sm={10}>
                                <Input type="text" name="name" placeholder="Introduceti numele companiei" value={company.name} onChange={handleInputChange}></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="phone" sm={2}>Telefon:</Label>
                            <Col sm={10}>
                                <Input type="number" name="phone" placeholder="Introduceti numarul de telefon" value={company.phone} onChange={handleInputChange}></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="address" sm={2}>Adresa:</Label>
                            <Col sm={10}>
                                <Input type="text" name="address" placeholder="Introduceti adresa" value={company.address} onChange={handleInputChange}></Input>
                            </Col>
                        </FormGroup>
                            <Button color="success" size="sm">{props.saveButtonText}</Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" size="sm" onClick={toggle}>{props.closeButtonText}</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default AddCompanyModal;