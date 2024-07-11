import React from 'react';
import heart from "../../assets/heart.svg"
import mes from "../../assets/mes.svg"
import ellipse from "../../assets/ellipse.svg"

import styles from "./header.module.css"
import {Button} from "../Button/Button";
import {Link} from "react-router-dom";


export const Navigation = (props) => {
    return (
      <div className={styles.navig}>
        <div className={styles.heart}>
          <img src={heart} alt="heart" />
        </div>

        <div className={styles.mes}>
          <Link to="/message">
            <img src={mes} alt="mes" />
          </Link>
        </div>

        <div className={styles.announc}>Мои объявления</div>

        <div className={styles.ellipse}>
          <div>
            <img src={ellipse} alt="ellipse" />
          </div>
          <p>Lincode</p>
        </div>
          <Link to="/add/advertisement">
              <Button color={"white"} text={"Разместить объявление"} width="200px" />
          </Link>
      </div>
    );
}
