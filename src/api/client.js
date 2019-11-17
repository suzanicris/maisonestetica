//import api from "@/api";

export default {
  getClients() {
    return [
      {
        id: 1,
        name: "Cristiane Cecília Ferreira",
        cpf: "351.927.784-09",
        birthday: "12/04",
        city: "Cáceres"
      },
      {
        name: "Cristiane Cecília Ferreira",
        cpf: "351.927.784-09",
        birthday: "12/04",
        city: "Cáceres"
      },
      {
        name: "Cristiane Cecília Ferreira",
        cpf: "351.927.784-09",
        birthday: "12/04",
        city: "Cáceres"
      },
      {
        name: "Cristiane Cecília Ferreira",
        cpf: "351.927.784-09",
        birthday: "12/04",
        city: "Cáceres"
      },
      {
        name: "Cristiane Cecília Ferreira",
        cpf: "351.927.784-09",
        birthday: "12/04",
        city: "Cáceres"
      }
    ];
  },

  getClient(id) {
    console.log(id); //eslint-disable-line
    return {
      id: 1,
      name: "Cristiane Cecília Ferreira",
      cpf: "351.927.784-09",
      birthday: "12/04",
      city: "Cáceres"
    };
  }
};
