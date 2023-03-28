import React from "react";
import style from "./list.module.scss";

function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "TypeScript",
      time: "01:30:00",
    },
    {
      task: "Docker",
      time: "01:00:00",
    },
  ];
  return (
    <aside className={style.tasksList}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className={style.item}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
