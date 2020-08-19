import React, { useState } from 'react';
import { Table, Button} from 'reactstrap';
import AddCompanyModal from './AddCompanyModal';
import EditModalCompany from './EditCompanyModal';

const CompanyTable = () => {
  
    //CompanyModalData 
    const ModalData = {
        addButtonText: "Adauga",
        editButtonText: "Editeaza",
        saveButtonText: "Salveaza",
        removeButtonText: "Sterge",
        closeButtonText: "Inchide",
        className: "custom-modal"
    }

const companyData = [
    { id: '1', name: 'AC HELCOR', phone: '0773989241', address: 'Miron Pompiliu' },
    { id: '2', name: 'Biofarm', phone: '0774886567', address: 'Aurel Vlaicu' },
    { id: '3', name: 'Carpatair', phone: '0775358789', address: 'Mihai Eminescu' }
];

    const [data, setData] = useState(companyData);

    //Add Company
    const addCompany = (company) => {
        company.id = Date.now()
        setData([...data, company])
    }

    //Edit Company
    const [editing, setEditing] = useState(false)
    const initialFormState = {
        id: null,
        name: '',
        phone: '',
        address: ''
    }
    const [currentCompany, setCurrentCompany] = useState(initialFormState)

    const editRow = (company) => {
        setEditing(true)
        setCurrentCompany(
            {
                id: company.id,
                name: company.name,
                phone: company.phone,
                address: company.address
            }
        )
    }
    const updateCompany = (id, updatedCompany) => {
        setEditing(false)
        setData(data.map((company) => (company.id === id ? updatedCompany : company)))
    }
    //Remove Company
    const removeCompany = id => setData(prevState => prevState.filter(item => item.id !== id))
   
    return (
        <div>
            {editing ? (
                 <EditModalCompany {...ModalData} currentCompany={currentCompany} updateCompany={updateCompany} setEditing={setEditing}/>
            ) : (
                <AddCompanyModal {...ModalData} addCompany={addCompany} />
            )}
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
                    {data.length > 0 ? (
                        data.map((company) =>(
                            <tr key={company.id}>
                                <td>{company.id}</td>
                                <td>{company.name}</td>
                                <td>{company.phone}</td>
                                <td>{company.address}</td>
                                <td>
                                <Button color="success" size="sm" className="mr-3" onClick={() => {editRow(company)}}>Editeaza</Button>
                                <Button color="danger" size="sm" onClick={() => removeCompany(company.id)}>Sterge</Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td>Nu exista companie</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default CompanyTable;