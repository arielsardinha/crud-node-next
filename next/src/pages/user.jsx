import { parseCookies } from "nookies";
import UserIndex from "../ui/partials/user";
const UserPage = () => <UserIndex />;

export async function getServerSideProps(ctx) {
  const { ["nextauth-token"]: token } = parseCookies(ctx);

  // verifica se nao tem o token, caso nao tenha faz um redirect
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      title: "User",
    }, // will be passed to the page component as props
  };
}

export default UserPage;
