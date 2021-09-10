import LoginIndexComponent from "../ui/partials/login/_index";
import { parseCookies } from "nookies";
export const getStaticProps = async () => {
  return {
    props: {
      title: "Login",
    },
  };
};

const LoginPage = () => <LoginIndexComponent />;

export default LoginPage;
