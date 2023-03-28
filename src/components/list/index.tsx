import React from "react";
import { useState } from "react";
import Item from "./item";
import style from "./list.module.scss";

function List() {
  const [tasks, setTasks] = useState([
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
  ]);

  return (
    <aside className={style.tasksList}>
      <h2 onClick={() => setTasks([])}>Studies of the day</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} task={item.task} time={item.time} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
