import React, { useState, useEffect } from 'react'
import {Button, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form,FormGroup, Label, Input} from 'reactstrap';


const EditCompanyModal = (props) => {
    //JavascriptCode

    const [company,setCompany] = useState(props.currentCompany)
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setCompany({
            ...company, [name]: value
        })
    }
    useEffect(() => {
        setCompany(props.currentCompany)
    }, [props])

    //Modal toggle 
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return(
        <div>
        <Button className={props.className} color="success" onClick={toggle}>{props.editButtonText}</Button> 
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>
                Adauga Companie
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={(event) => {
                    event.preventDefault();
                    props.updateCompany(company.id, company)
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

export default EditCompanyModal;