import { Button, CircularProgress, Fab } from "@material-ui/core";
import { Edit, HighlightOff, Search } from "@material-ui/icons";
import { Link } from "@material-ui/core";
import { useRouter } from "next/router";
import { Box } from "@material-ui/system";
import { useEffect, useState } from "react";
import { api } from "../../context/services/api";
import UseInformation from "../userInformation/UserInformation";
import { ContainerUserInformation, BoxValue } from "./user.stye";
import InputSearch from "../inputs/Search/Search";
import Swal from "sweetalert2";

const AdminIndex = () => {
  const router = useRouter();
  const [carregando, setCarregando] = useState(false);
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

  function editUser(id) {
    Swal.fire({
      title: "Tem certeza?",
      text: "tem certeza que deseja editar usuario!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push(`/${id}`);
      }
    });
  }
  function deleteUser(id, index) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Tem certeza?",
        text: "tem certeza que deseja deletar usuário?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, delete!",
        cancelButtonText: "não, cancele!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          api.delete(`/delete/${id}`).then(({ data }) => {
            setUser(data);
            swalWithBootstrapButtons.fire("Deletado!", "success");
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire("Cancelado");
        }
      });
  }

  return (
    <>
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button
          sx={{ width: "200px" }}
          variant={"contained"}
          disabled={carregando}
          onClick={() => {
            setCarregando(true);
            router.push("/registrationAdmin");
          }}
        >
          {carregando ? <CircularProgress size={20} /> : "novo usuário"}
        </Button>
        <Link sx={{ ml: 5 }} href={"/"}>
          Sair
        </Link>
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
      {console.log(users)}
      {users.map((user, index) => (
        <div key={user.id}>
          <ContainerUserInformation>
            <Box className={"d-flex"} sx={{ mr: 4 }}>
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
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Fab>
                <Edit onClick={() => editUser(user.id)} />
              </Fab>
              <Fab>
                <HighlightOff onClick={() => deleteUser(user.id, index)} />
              </Fab>
            </Box>
          </ContainerUserInformation>
        </div>
      ))}
    </>
  );
};
export default AdminIndex;
