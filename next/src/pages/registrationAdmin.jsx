import RegistrationComponent from "../ui/partials/registration/admin";
export const getStaticProps = async () => {
  return {
    props: {
      title: "Registration Admin",
    },
  };
};

const RegistrationPage = () => <RegistrationComponent />;

export default RegistrationPage;
