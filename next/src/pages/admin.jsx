import { parseCookies } from "nookies";
import AdminIndex from "../ui/partials/userAdm";
const AdminPage = () => <AdminIndex />;

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
      title: "Admin",
    }, // will be passed to the page component as props
  };
}

export default AdminPage;
