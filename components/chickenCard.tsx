import style from "../styles/chicken.module.sass"

import { NextPage } from "next"
import { FunctionComponent } from "react";

interface props{
    title : string
}

const Chicken:FunctionComponent<props> = ({title}) => {
    

    return (
        <section className={style.chickenWrap}>
            <h4>{title}</h4>
        </section>  
    );
}

export default Chicken;