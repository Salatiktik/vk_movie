import {React} from "react";
import { useLocation } from "react-router-dom";
import classes from './container.module.css';


const Container = ({children, loading, ...props}) => {
    const location = useLocation()
    return (
        <div className={classes.container}>
            <div className={(/[/]movie[/][\d]+/g).test(location.pathname)? classes.darkContent:classes.content}>
                {children}
            </div>
        </div>
    );
}
 
export default Container;