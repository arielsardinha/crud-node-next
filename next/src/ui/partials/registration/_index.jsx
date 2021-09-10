import React from "react";
import RoundedButton from "../../inputs/RoundedButton/RoundedButton";
import TextFieldStyled from "../../inputs/TextField/TextField";
import { ContainerStyled } from "./_index.styled";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthContext";

const RegistrationComponent = () => {
  const { register, handleSubmit } = useForm();

  //  pega a função que esta dentro da AuthContext
  const { registerIn } = useContext(AuthContext);

  async function handleSignIn(data) {
    await registerIn(data);
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
        <RoundedButton variant={"contained"} type={"submit"}>
          Cadastrar
        </RoundedButton>
      </form>
    </ContainerStyled>
  );
};

export default RegistrationComponent;
