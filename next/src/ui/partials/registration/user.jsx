import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import router from "next/router";
import Swal from "sweetalert2";
import { Box } from "@material-ui/system";
import { CircularProgress } from "@material-ui/core";
import RoundedButton from "../../inputs/RoundedButton/RoundedButton";
import TextFieldStyled from "../../inputs/TextField/TextField";
import { ContainerStyled } from "./_index.styled";
import { AuthContext } from "../../../context/AuthContext";

const UserRegistration = () => {
  const [carregando, setCarregando] = useState(false);
  const { register, handleSubmit } = useForm();

  //  pega a função que esta dentro da AuthContext
  const { registerIn } = useContext(AuthContext);

  async function handleSignIn(data) {
    setCarregando(true);
    const date = await registerIn(data);
    if (date === "concluido") {
      router.push("/");
    } else {
      setCarregando(false);
      Swal.fire("Erro inesperado!", "question");
    }
  }

  return (
    <ContainerStyled>
      <h1>REGISTRAR</h1>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <TextFieldStyled
          label={"Nome"}
          fullWidth
          type="text"
          required
          {...register("name")}
        />
        <TextFieldStyled
          label={"Idade"}
          fullWidth
          type="number"
          required
          {...register("idade")}
        />

        <TextFieldStyled
          label={"data de nascimento"}
          fullWidth
          type="text"
          required
          {...register("data")}
        />
        <TextFieldStyled
          label={"cpf"}
          fullWidth
          type="number"
          required
          {...register("cpf")}
        />
        <TextFieldStyled
          label={"Email"}
          fullWidth
          type="email"
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
            {carregando ? <CircularProgress size={20} /> : "Acessar"}
          </RoundedButton>
        </Box>
      </form>
    </ContainerStyled>
  );
};

export default UserRegistration;
