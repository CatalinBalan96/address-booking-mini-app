import React, { useState } from 'react'
import {Button, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form,FormGroup, Label, Input} from 'reactstrap';

const EditCompanyModal = (props) => {

    //Company Modal
    const[modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <div className="d-inline-block">
            <Button className="mr-2" color="success" size="sm" onClick={toggle}>{props.editButtonText}</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    Adauga Companie
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label for="name" sm={2}>Nume:</Label>
                            <Col sm={10}>
                                <Input type="text" name="name" placeholder="Introduceti numele companiei" value=""></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="phone" sm={2}>Telefon:</Label>
                            <Col sm={10}>
                                <Input type="number" name="phone" placeholder="Introduceti numarul de telefon" value=""></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="address" sm={2}>Adresa:</Label>
                            <Col sm={10}>
                                <Input type="text" name="address" placeholder="Introduceti adresa" value=""></Input>
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