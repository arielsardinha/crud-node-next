import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import router from "next/router";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import {
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Box,
} from "@material-ui/core";
import { ContainerStyled } from "../registration/_index.styled";
import { TextFieldStyled } from "../../inputs/TextField/TextField.styled";
import RoundedButton from "../../inputs/RoundedButton/RoundedButton";
import { AuthContext } from "../../../context/AuthContext";
import { api } from "../../../context/services/api";

const EditUserIndex = () => {
  const { query } = useRouter();
  const [carregando, setCarregando] = useState(false);
  const [user, setUser] = useState([]);
  const { register, handleSubmit } = useForm();

  //  pega a função que esta dentro da AuthContext
  const { editUser } = useContext(AuthContext);

  useEffect(() => {
    if (query.id) {
      api.get(`/user/edit/${query.id}`).then(({ data }) => setUser(data));
    }
  }, [query.id]);

  async function handleSignIn(data) {
    setCarregando(true);
    const date = { data, id: query.id };
    const dateEdit = await editUser(date);
    if (dateEdit === "concluido") {
      router.push("/admin");
    } else {
      setCarregando(false);
      Swal.fire("Erro inesperado!", "question");
    }
  }

  if (user.name !== undefined) {
    return (
      <ContainerStyled>
        <h1>EDITAR</h1>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <TextFieldStyled
            label={"Nome"}
            fullWidth
            type="text"
            defaultValue={user.name}
            required
            {...register("name")}
          />
          <TextFieldStyled
            label={"Idade"}
            fullWidth
            type="number"
            value={user.idade}
            required
            {...register("idade")}
          />

          <TextFieldStyled
            label={"data de nascimento"}
            fullWidth
            type="text"
            defaultValue={user.data}
            required
            {...register("data")}
          />
          <TextFieldStyled
            label={"cpf"}
            fullWidth
            type="number"
            defaultValue={user.cpf}
            required
            {...register("cpf")}
          />
          <TextFieldStyled
            label={"Email"}
            fullWidth
            type="email"
            defaultValue={user.email}
            required
            {...register("email")}
          />
          <TextFieldStyled
            label={"Senha"}
            fullWidth
            type="password"
            required
            {...register("password")}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <RoundedButton
              sx={{ width: "200px" }}
              variant={"contained"}
              type={"submit"}
              disabled={carregando}
            >
              {carregando ? <CircularProgress size={20} /> : "Atualizar"}
            </RoundedButton>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={user.admin == true ? true : false}
                  />
                }
                label="Adicionar como administrador"
                {...register("admin")}
              />
            </FormGroup>
          </Box>
        </form>
      </ContainerStyled>
    );
  }
  return <div></div>;
};

export default EditUserIndex;
