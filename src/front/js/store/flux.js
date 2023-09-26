const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			isLogin: false,
			token: '',
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
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			getToken: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/token",{						
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ email, password })						
					})
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			getUser: async () => {
				let store = getStore()
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/profile/customer",
						{
							method: "GET",
							headers: {
								"Content-Type": "application/json",
								"Authorization": "Bearer " + store.token
							},
						})
					const data = await resp.json()
					setStore({ profile: data })
				} catch (error) {
					console.log("Error loading message from backend", error)
				}

			},
			createUser: async (user) => {
				try  {
					const resp = await fetch(process.env.BACKEND_URL + '/api/token', {
						method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(user)
					})
					const data = await resp.json()
					return true				
			 } catch(err){
					console.log("Error sending customer to back backend", error)
				}
			}
			}
		}
	}


export default getState;
