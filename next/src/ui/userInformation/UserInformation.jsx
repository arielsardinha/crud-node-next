import {
  AvatarStyled,
  RatingStyled,
  UserDescription,
  UserInformationContainer,
  UserName,
} from "./UserInformation.style";

const UseInformation = ({
  name,
  picture,
  rating,
  description,
  sx,
  isRating,
  ...props
}) => {
  return (
    <UserInformationContainer sx={sx} isRating={isRating}>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <RatingStyled value={rating} readOnly></RatingStyled>
      <UserName>{name}</UserName>
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UseInformation;
