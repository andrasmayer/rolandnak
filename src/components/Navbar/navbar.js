import { Link } from "react-router-dom";

export const Navbar = (props) => {
    return (
        <ul>
            {props.routes.map((route, index) =>  
                route.icon != null && (
                    <li as={Link} to="/123" key={index}>
                        <Link to={route.path}>{route.name}</Link>
                    </li>
                )
            )}
        </ul>
    )
}