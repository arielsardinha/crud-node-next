import { useEffect, useState } from "react";
import { api } from "../../context/services/api";
import UseInformation from "../userInformation/UserInformation";
import { ContainerUserInformation, BoxValue } from "./_user.stye";

const UserIndex = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    api.get("/user").then(({ data }) => setUser(data));
  }, []);

  return (
    <>
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
