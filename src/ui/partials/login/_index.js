import RoundedButton from "../../inputs/RoundedButton/RoundedButton"
import TextField from "../../inputs/TextField/TextField"
import { ContainerStyled } from "./_index.styled"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../../context/AuthContext"


const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    async function handleSignIn(data) {
        await signIn(data);
    }
    return (
        <>
            <ContainerStyled>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <TextField
                        label={"Email"}
                        fullWidth
                        type="email"
                        required
                        {...register("email")}
                    />
                    <TextField
                        label={"Senha"}
                        fullWidth
                        type="password"
                        required
                        {...register("password")}
                    />
                    <RoundedButton variant={'contained'} type={'submit'}>Acessar</RoundedButton>
                </form>
            </ContainerStyled>
        </>
    )
}

export default Login