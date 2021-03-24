export function getAppointmentsForDay(state, day){
  const currentDay = state.days.find(dayObj => dayObj.name === day);
  const appointmentIds = currentDay ? currentDay.appointments : [];
  const appointments = appointmentIds.map(id => state.appointments[id]);
  return appointments;
}


export function getInterview(state, interview){
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



export function getInterviewersForDay(state, day){
  const currentDay = state.days.find(dayObj => dayObj.name === day);
  const interviewersDay = currentDay ? currentDay.interviewers : []
  const interviewers = interviewersDay.map(appointmentID => state.interviewers[appointmentID]);
  return interviewers
}