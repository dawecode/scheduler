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