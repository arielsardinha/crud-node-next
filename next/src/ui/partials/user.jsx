import { Link } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { useEffect, useState } from "react";
import { api } from "../../context/services/api";
import InputSearch from "../inputs/Search/Search";
import UseInformation from "../userInformation/UserInformation";
import { ContainerUserInformation, BoxValue } from "./user.stye";
import Swal from "sweetalert2";

const UserIndex = () => {
  const [users, setUser] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  useEffect(() => {
    api.get("/user").then(({ data }) => setUser(data));
  }, []);

  function search(name) {
    api
      .get(`/user/${name}`)
      .then(({ data }) => setUser(data))
      .catch(() => {
        Swal.fire(
          `Usuário '${name}' não encontrado`,
          "Escreva o nome completo do usuário ",
          "question"
        );
      });
  }

  return (
    <>
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Link href={"/"}>Sair</Link>
      </Box>
      <Box
        sx={{
          textAlign: "right",
          mr: 4,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <InputSearch
          onChange={(event) => setSearchUser(event.target.value)}
          onClick={() => search(searchUser)}
        />
      </Box>
      {users.map((user) => (
        <div key={user.id}>
          <ContainerUserInformation>
            <UseInformation
              name={user.name}
              rating={4}
              description={user.data}
            />
            <BoxValue>
              <p>Idade: {user.idade}</p>
              <p>CPF: {user.cpf}</p>
              <p>Criado em: {user.newDate}</p>
            </BoxValue>
          </ContainerUserInformation>
        </div>
      ))}
    </>
  );
};
export default UserIndex;
