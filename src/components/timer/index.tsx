import Button from "../button";
import style from "./timer.module.scss"

export default function Timer () {
    return (
        <div className={style.timer}>
            <p className={style.title}></p>
            <div className={style.watchWrapper}>
            <Timer />
            </div>
            <Button
                text="Start"
            />
        </div>
    )
}