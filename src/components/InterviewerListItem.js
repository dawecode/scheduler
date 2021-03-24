import React from "react";
import "components/InterviewerListItem.scss"

const classNames = require('classnames')

export default function InterviewerListItem(props) {
  const interviewerListClass = classNames("interviewers__item", {
    interviewerListClass: true,
    "interviewers__item": props.item,
    "interviewers__item--selected": props.selected
  })
  return (
    <li
      className={interviewerListClass}
      onClick={props.setInterviewer} >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  )
}