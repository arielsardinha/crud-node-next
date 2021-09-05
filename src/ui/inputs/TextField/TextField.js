import { TextFieldStyled } from "./TextField.styled";

const TextField = ({ label, ...props }) => <TextFieldStyled label={label} {...props} />

export default TextField