import Login from "../ui/partials/login/_index"
export const getStaticProps = async () => {
  return {
    props: {
      title: "Login"
    }
  }
}

export default function LoginPage() {
  return (
    <>
      <Login />
    </>
  )
}
