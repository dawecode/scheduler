import React from "react";
import "components/DayListItem.scss";

const classNames = require('classnames');

export default function DayListItem(props) {
  const dayListClass = classNames ("day-list__item",{
    dayListClass :true,
    "day-list__item " :props.item,
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  })
  return (
    <li 
      className = {dayListClass}
      onClick = {()=>props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light"> {props.spots ? props.spots : "no"} { props.spots === 1 ? "spot" : "spots" } remaining</h3>
    </li>
  );
}