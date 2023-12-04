import React, { useState, useEffect } from "react";

const URL_API = "https://playground.4geeks.com/apis/fake/contact/agenda/agenda_chris";

export const List = () => {
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        try {
            const response = await fetch(URL_API);

            if (response.ok) {
                const data = await response.json();
                setContacts(data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleDelete = async (id) => {
        const apiUrl = `${URL_API}/${id}`;

        try {
            const response = await fetch(apiUrl, { method: 'DELETE' });
            if (apiUrl == []) {


            }
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }


            setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
        } catch (error) {
            console.error('Error en la solicitud DELETE:', error.message);
        }
    };

    return (
        <div>
            {contacts.length === 0 ? (
                <p>No hay usuarios en la agenda.</p>
            ) : (
                contacts.map((contact) => (
                    <div className="card" key={contact.id} style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{contact.name}</h5>
                            <p className="card-text">Email: {contact.email}</p>
                            <p className="card-text">Phone: {contact.phone}</p>
                            <p className="card-text">Address: {contact.address}</p>
                            <button onClick={() => handleDelete(contact.id)} className="btn btn-danger">
                                DELETE
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};