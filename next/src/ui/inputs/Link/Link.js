import NextLink from 'next/link'
import { Link as MuiLink } from '@material-ui/core'

const Link = ({ href, Component = MuiLink, children, ...props }) => {
    return (
        <>
            <NextLink href={href} passHref>
                <Component {...props}>
                    {children}
                </Component>
            </NextLink>
        </>
    )
}
export default Link