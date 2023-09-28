const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      token: localStorage.getItem("token") || null,
      profile: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getIsLogin: () => {
        return getStore();
      },

      resetLocalStorage: () => {
        const store = getStore();
        localStorage.removeItem("token");
        setStore({ ...store, token: null, profile: null });
      },
      loginUser: async ({ email, password }) => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
          const data = await resp.json();
          console.log(data);
          setStore({ token: data.token });
          localStorage.setItem("token", data.token);
          getActions().getUserProfile();
          // don't forget to return something, that is how the async resolves
          return data.authorize;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      getUserProfile: async () => {
        const store = getStore();
        console.log(store.token);
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/profile/user",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + store.token,
              },
            }
          );
          if (resp.status == 200) {
            const data = await resp.json();
            setStore({ profile: data });
            return true;
          }
          console.log("expired");
          return false;
        } catch (error) {
          console.log("Error loading message from backend", error);
          return false;
        }
      },
      createUser: async (user) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
          const data = await resp.json();
          return true;
        } catch (err) {
          console.log("Error sending customer to back backend", error);
        }
      },
      logOut: () => {
        localStorage.removeItem("token");
        setStore({ token: null, profile: null });
      },
    },
  };
};

export default getState;
