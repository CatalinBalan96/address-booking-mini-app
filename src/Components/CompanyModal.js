import React, { useState } from 'react'
import {Button, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form,FormGroup, Label, Input} from 'reactstrap';


const CompanyModal = (props) => {
    //JavascriptCode

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
                    <Form>
                        <FormGroup row>
                            <Label for="name" sm={2}>Nume:</Label>
                            <Col sm={10}>
                                <Input type="text" placeholder="Introduceti numele companiei"></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="phone" sm={2}>Telefon:</Label>
                            <Col sm={10}>
                                <Input type="number" placeholder="Introduceti numarul de telefon"></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="address" sm={2}>Adresa:</Label>
                            <Col sm={10}>
                                <Input type="text" placeholder="Introduceti adresa"></Input>
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

export default CompanyModal;