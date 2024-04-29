import {React} from "react";
import classes from './paginator.module.css';


const Paginator = ({page, setPage, capacity, ...props}) => {
    const left = "«"
    const right = "»"

    function generateSimplePag(start, end){
        let res = []
        for(let i = start; i<=end;i++){
            res.push(<button onClick={()=>setPage(i)} className={classes.pageButton} disabled={page==i}>{i}</button>)
        }
        return res
    }

    function generatePag(){
        let res = []
        if(page<=4){
            res = generateSimplePag(1, 7)
            res.push( <button className={classes.pageButton} disabled>...</button> )  
            res.push( <button onClick={()=>setPage(capacity)} className={classes.pageButton}>{capacity}</button> )
        }
        else if(capacity - page <= 4){
            res.push(<button onClick={()=>setPage(1)} className={classes.pageButton}>1</button>)
            res.push(<button className={classes.pageButton} disabled>...</button>)
            res.push(...generateSimplePag(capacity-6,capacity))
        }
        else
        {
            res.push(<button onClick={()=>setPage(1)} className={classes.pageButton}>1</button>)
            res.push(<button className={classes.pageButton} disabled>...</button>)
            res.push(...generateSimplePag(page-2,page+2))
            res.push( <button className={classes.pageButton} disabled>...</button> )
            res.push( <button onClick={()=>setPage(capacity)} className={classes.pageButton}>{capacity}</button> )
        }
        return res
    }

    return (
        <div className={classes.paginator}>
            <button className={classes.pageButton} onClick={()=>setPage(page-1)} disabled={page==1}>{left}</button>
            {
                capacity <= 9?
                    generateSimplePag(1, capacity)
                :
                    generatePag()
            }
            <button className={classes.pageButton} onClick={()=>setPage(page+1)} disabled={page==capacity}>{right}</button>
        </div>
    );
}
 
export default Paginator;