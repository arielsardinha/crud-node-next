import React, { useState } from "react";
import RoundedButton from "../../inputs/RoundedButton/RoundedButton";
import TextFieldStyled from "../../inputs/TextField/TextField";
import { ContainerStyled } from "./_index.styled";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthContext";
import Swal from "sweetalert2";
import { CircularProgress, Link } from "@material-ui/core";
import { Box } from "@material-ui/system";

const LoginIndexComponent = () => {
  const [carregando, setCarregando] = useState(false);
  const { register, handleSubmit } = useForm();

  //  pega a função que esta dentro da AuthContext
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data) {
    setCarregando(true);
    const res = await signIn(data);
    if (res === "user undefined") {
      setCarregando(false);
      Swal.fire({
        title: "Error!",
        text: "Senha ou Email incorreto",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  }

  return (
    <ContainerStyled>
      <form onSubmit={handleSubmit(handleSignIn)}>
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          <RoundedButton
            sx={{ width: "200px" }}
            variant={"contained"}
            type={"submit"}
            disabled={carregando}
          >
            {carregando ? <CircularProgress size={20} /> : "Acessar"}
          </RoundedButton>
          <Link href={"/registration"}>novo cadastro</Link>
        </Box>
      </form>
    </ContainerStyled>
  );
};

export default LoginIndexComponent;
