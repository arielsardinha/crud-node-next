import { parseCookies } from "nookies";
import EditUserIndex from "../ui/partials/edit";
const EditPage = () => <EditUserIndex />;

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
      title: "Edit User",
    }, // will be passed to the page component as props
  };
}

export default EditPage;
