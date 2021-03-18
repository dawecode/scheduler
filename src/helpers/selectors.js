export function getAppointmentsForDay(state,day){
  const currentDay = state.days.find(dayObj => dayObj.name === day);
  const appointmentIds = currentDay ? currentDay.appointments : [];
  const appointments = appointmentIds.map(id => state.appointments[id]);
  return appointments;
}


/*state.days.find(dayObj => dayObj.name === day)
const appointmentIds = state.days[0].appointments
appointmentIds.map(id => state.appointments[id])
state.appointments["2"]*/


export function getInterview(state, interview) {
  const interviewData = interview
  const interviewerId = interviewData ? interviewData.interviewer : null
  if (interviewerId) {
    const newObj = {
      student: interviewData.student,
      interviewer: state.interviewers[interviewerId]
    }
    return newObj
  } else {
    return null
  }
}



/*{  
  "student": "Lydia Miller-Jones",
  "interviewer": {  
    "id": 1,
    "name": "Sylvia Palmer",
    "avatar": "https://i.imgur.com/LpaY82x.png"
  }
}*/

export function getInterviewersForDay(state, day) {
  const currentDay = state.days.find(dayObj => dayObj.name === day);
  const interviewersDay= currentDay ? currentDay.interviewers : []
  const interviewers = interviewersDay.map(appointmentID => state.interviewers[appointmentID]);
  return interviewers
}