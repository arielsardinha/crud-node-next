import RegistrationComponent from "../ui/partials/registration/_index";
export const getStaticProps = async () => {
  return {
    props: {
      title: "Registration",
    },
  };
};

const RegistrationPage = () => <RegistrationComponent />;

export default RegistrationPage;
