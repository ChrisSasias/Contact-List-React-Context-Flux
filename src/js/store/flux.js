
const URL_API = "https://playground.4geeks.com/apis/fake/contact/agenda/Agenda_Chris";
const getState = ({ getStore, getActions, setStore }) => {



	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			contacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			fetchContacts: async () => {
				try {
					const response = await fetch(URL_API);

					if (response.ok) {
						const data = await response.json();
						console.log(data);
						setStore({ contacts: data });
					}
				} catch (error) {
					console.error(error);
				}
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store

				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
