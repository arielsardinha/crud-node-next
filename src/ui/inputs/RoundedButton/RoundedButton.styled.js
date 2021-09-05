import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const RoundedButtonStyled = styled(Button)`
    margin-top: ${({ theme }) => theme.spacing(3)};
`;