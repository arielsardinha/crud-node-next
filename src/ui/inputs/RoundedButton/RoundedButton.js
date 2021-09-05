import { RoundedButtonStyled } from "./RoundedButton.styled";

const RoundedButton = ({ variant, children, ...props }) => <RoundedButtonStyled variant={variant} {...props}>{children}</RoundedButtonStyled>

export default RoundedButton;
