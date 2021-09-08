import { styled } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

export const TextFieldStyled = styled(TextField)`
    margin: ${({ theme }) => theme.spacing()} 0;
`;
