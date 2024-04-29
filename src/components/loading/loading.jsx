import {React} from "react";
import classes from './loading.module.css';


const Loading = ({children, loading, ...props}) => {
    return (
        <div>
            {!loading?
                children
                :
                <div className={classes.loading}>Загрузка...</div>
            }
        </div>
    );
}
 
export default Loading;