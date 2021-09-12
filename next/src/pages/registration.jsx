import UserRegistration from "../ui/partials/registration/user";
export const getStaticProps = async () => {
  return {
    props: {
      title: "Registration",
    },
  };
};

const RegistrationPage = () => <UserRegistration />;

export default RegistrationPage;
