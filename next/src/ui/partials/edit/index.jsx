import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@material-ui/core";
import router from "next/router";
import Swal from "sweetalert2";
import { ContainerStyled } from "../registration/_index.styled";
import { TextFieldStyled } from "../../inputs/TextField/TextField.styled";
import RoundedButton from "../../inputs/RoundedButton/RoundedButton";
import { AuthContext } from "../../../context/AuthContext";

const EditUserIndex = () => {
  const [carregando, setCarregando] = useState(false);
  const { register, handleSubmit } = useForm();

  //  pega a função que esta dentro da AuthContext
  const { editUser } = useContext(AuthContext);

  async function handleSignIn(data) {
    setCarregando(true);
    const dateEdit = await editUser(data);
    if (dateEdit === "concluido") {
      router.push("/admin");
    } else {
      setCarregando(false);
      Swal.fire("Erro inesperado!", "question");
    }
  }

  return (
    <ContainerStyled>
      <h1>CADASTRO</h1>
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
        <RoundedButton
          sx={{ width: "200px" }}
          variant={"contained"}
          type={"submit"}
          disabled={carregando}
        >
          {carregando ? <CircularProgress size={20} /> : "Acessar"}
        </RoundedButton>
      </form>
    </ContainerStyled>
  );
};

export default EditUserIndex;
