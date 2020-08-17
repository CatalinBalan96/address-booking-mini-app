import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import CompanyModal from './CompanyModal';


const data = [
    { id: '1', name: 'AC HELCOR', phone: '0773989241', address: 'Miron Pompiliu' },
    { id: '2', name: 'Biofarm', phone: '0774886567', address: 'Aurel Vlaicu' },
    { id: '3', name: 'Carpatair', phone: '0775358789', address: 'Mihai Eminescu' }
];

//CompanyModalData 

const ModalData = {
    addButtonText: "Adauga",
    editButtonText: "Editeaza",
    saveButtonText: "Salveaza",
    removeButtonText: "Sterge",
    closeButtonText: "Inchide",
    className: "custom-modal"
}

const TabelCompanii = () => {
    const [companii, setCompanii] = useState(data);
    const stergeCompanie = id => setCompanii(prevState => prevState.filter(item => item.id !== id))

    return (
        <div>
            <CompanyModal {...ModalData} />
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nume</th>
                        <th>Telefon</th>
                        <th>Adresa</th>
                        <th>Actiuni</th>
                    </tr>
                </thead>
                <tbody>
                    {companii.map(item => (<tr key={item.id}>
                        <td>{item.id}</td>
                        <th>{item.name}</th>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>
                            <Button className="mr-2" color="success" size="sm">Editeaza</Button>
                            <Button color="danger" size="sm" onClick={() => stergeCompanie(item.id)}>Sterge</Button>
                        </td>
                    </tr>))}
                </tbody>
            </Table>
        </div>
    )
}

export default TabelCompanii;