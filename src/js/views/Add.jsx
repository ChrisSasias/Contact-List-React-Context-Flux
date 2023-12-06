import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


import { useParams } from "react-router";
import "../../styles/home.css";

export const Add = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const { store, actions } = useContext(Context);

	const params = useParams();

	const URL_API = "https://playground.4geeks.com/apis/fake/contact/";

	const handleChange = (event, set) => {
		set(event.target.value);

	};
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await fetch(URL_API, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				// esto de abajo es lo que se manda 
				body: JSON.stringify({
					full_name: name,
					email: email,
					agenda_slug: "Agenda_Chris",
					address: address,
					phone: phone,
				}),
			});

			if (response.ok) {
				const data = await response.json();
				console.log("Data sent successfully:", data);
				setName("");
				setEmail("");
				setPhone("");
				setAddress("");
			} else {
				console.error("Failed to send data:", response.statusText, response.status);
			}
		} catch (err) {
			console.error("An error occurred:", err);
		}
	};

	useEffect(() => {

		if (params.id) {
			const contact = store.contacts.find(obj => {
				return obj.id === params.id
			})
			if (contact) {
				setName(contact.name);
				setEmail(contact.email);
				setPhone(contact.phone);
				setAddress(contact.address);
			}

		}

	}, [])

	return (
		< div className="text-center mt-5 m-4 m-4 border-5">
			<div>
				<h2>Add a new contact</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="fullName" className="d-flex flex-row mt-2 m-1">
							Full Name
						</label>
						<input
							type="text"
							className="form-control"
							id="fullName"
							placeholder="Full Name"
							onChange={(e) => handleChange(e, setName)}
							value={name}
						/>
					</div>
					<div className="form-group">
						<label
							htmlFor="EMAIL"
							className="d-flex flex-row mt-2 m-1"
						>
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="EMAIL"
							placeholder="Enter email"
							onChange={(e) => handleChange(e, setEmail)}
							value={email}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phone" className="d-flex flex-row mt-2 m-1">
							Phone
						</label>
						<input
							type="number"
							className="form-control"
							id="phone"
							placeholder="Enter Phone"
							onChange={(e) => handleChange(e, setPhone)}
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="address" className="d-flex flex-row mt-2 m-1">
							Address
						</label>
						<input
							type="text"
							className="form-control"
							id="address"
							placeholder="Enter address"
							onChange={(e) => handleChange(e, setAddress)}
							value={address}
						/>
					</div>

					<button type="submit" className="btn btn-primary w-100 mt-4">
						Save
					</button>
				</form>
			</div>
		</div>
	);
};
