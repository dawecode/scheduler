import React, { useState,useEffect } from "react";
import { getAppointmentsForDay , getInterview } from "helpers/selectors";
import "components/Application.scss";
import DayList from "components/DayList"
import Appointment from "components/Appointment"

const axios = require('axios');


export default function Application(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {},
    interviewers: {}
  });

 
  //appointments 
  const dailyAppointments = getAppointmentsForDay(state,state.day);
  const parsedAppointments = dailyAppointments.map( appointment => {
    const interview = getInterview(state , appointment.interview);
    return( <Appointment 
      key= {appointment.id} 
      id = {appointment.id}
      time = {appointment.time}
      interview = {interview}
     /> )
    })

   //set state for day / days  
  const setDay = day => setState({ ...state, day });
  //const setDays = days =>  {setState(prev => ({...prev,days})); };

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({
        ...prev, days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    })
  },[])

  return (
    <main className="layout">
      <section className="sidebar">
        <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
  <DayList
    days={state.days}
    day={state.day}
    setDay={setDay}
  />
</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
        {parsedAppointments}
        <Appointment  key= "last" time= "5pm"/>
      </section>
    </main>
    
    
  );
}



