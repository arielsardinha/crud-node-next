export const getStaticProps = async () => {
    return {
        props: {
            title: "User"
        }
    }
}

const UserPage = () => <div>user</div>

export default UserPage