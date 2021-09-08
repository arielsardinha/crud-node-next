import React from "react"
import RoundedButton from "../../inputs/RoundedButton/RoundedButton"
import TextFieldStyled from "../../inputs/TextField/TextField"
import { ContainerStyled } from "./_index.styled"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../../context/AuthContext"

const LoginIndexComponent = () => {
    const { register, handleSubmit } = useForm();

    //  pega a função que esta dentro da AuthContext
    const { signIn } = useContext(AuthContext);

    async function handleSignIn(data) {
        await signIn(data);
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
                <RoundedButton variant={'contained'} type={'submit'}>Acessar</RoundedButton>
            </form>
        </ContainerStyled>
    )

};

export default LoginIndexComponent;