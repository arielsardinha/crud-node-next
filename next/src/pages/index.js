import LoginIndexComponent from "../ui/partials/login/_index"
export const getStaticProps = async () => {
  return {
    props: {
      title: "Login"
    }
  }
}

function LoginPage() {
  return <LoginIndexComponent />
}

// export const getServerSideProps = async (ctx) => {
//   const token = localStorage.getItem("myToken")
//   if (!token) {
//     return {
//       redirect: {
//         destination: "/index",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {}
//   }
// }
export default LoginPage