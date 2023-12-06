import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";



const URL_API = "https://playground.4geeks.com/apis/fake/contact/agenda/Agenda_Chris";



export const List = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);



    const handleDelete = async (id) => {
        const apiUrl = `${URL_API}`;

        try {
            const response = await fetch(apiUrl, { method: 'DELETE' });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
        } catch (error) {
            console.error('Error en la solicitud DELETE:', error.message);
        }
    };

    const handleUpdate = async (id) => {
        const apiUrl = `${URL_API / id}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([




                ]),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            setContacts((Contacts) => Contacts.map((contact) => {
                if (contact.id === id) {


                }
                return contact;
            }));
        } catch (error) {
            console.error('Error en la solicitud PUT:', error.message);
        }
    };

    return (
        <div>
            {store.contacts.length === 0 ? (
                <p>No hay usuarios en la agenda.</p>
            ) : (
                store.contacts.map((contact) => (
                    <div className="card" key={contact.id} style={{ width: "18rem" }}>
                        <div className="card-body">
                            <img src="https://i.pravatar.cc/300" alt="img" className="card-img-top rounded-circle" />
                            <h5 className="card-title">{contact.full_name}</h5>
                            <p className="card-text">Email: {contact.email}</p>
                            <p className="card-text">Phone: {contact.phone}</p>
                            <p className="card-text">Address: {contact.address}</p>
                            <button onClick={() => handleDelete(contact.id)} className="btn btn-danger">
                                🗑️
                            </button>
                            <button onClick={() => navigate("/edit/" + contact.id)} className="btn btn-warning">
                                <i className="fas fa-pencil-alt"></i>
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};