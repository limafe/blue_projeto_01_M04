const baseUrl = "https://diarioapi.onrender.com";

export const Api = {
  login: async (userBody) => {
    localStorage.removeItem("Token");
    const response = await fetch(baseUrl + "/auth/login", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ ...userBody }),
    });
    const data = await response.json();
    localStorage.setItem("Token", data.token);
    return data;
  },

  register: async (userBody) => {
    const response = await fetch(baseUrl + "/users/create", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ ...userBody }),
    });
    const data = await response.json();
    return data;
  },

  getChars: async () => {
    const response = await fetch(baseUrl + "/characters", {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("Token"),
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    const data = await response.json();
    return data;
  },

  createChar: async (charBody) => {
    const response = await fetch(baseUrl + "/characters/create", {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("Token"),
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ ...charBody }),
    });
    const data = await response.json();
    return data;
  },

  searchCharacterByName: async (charName) => {
    const response = await fetch(
      baseUrl + "/characters/search?name=" + charName,
      {
        method: "GET",
        headers: new Headers({
          Authorization: "Bearer " + localStorage.getItem("Token"),
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
      }
    );
    const data = await response.json();
    return data;
  },

  deleteCharacter: async (charId) => {
    const response = await fetch(baseUrl + "/characters/delete/" + charId, {
      method: "DELETE",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("Token"),
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    const data = await response.json();
    return data;
  },
};
