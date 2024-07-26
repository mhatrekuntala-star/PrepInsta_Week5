document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const doctor = document.getElementById('doctor').value;
    
    const appointment = {
        name: name,
        email: email,
        number: number,
        date: date,
        time: time,
        doctor: doctor
    };
    
    addAppointmentToList(appointment);
    
    // Clear the form
    document.getElementById('appointmentForm').reset();
});

function addAppointmentToList(appointment) {
    const appointmentList = document.getElementById('appointmentList');
    const appointmentItem = document.createElement('li');
    appointmentItem.textContent = `${appointment.name} - ${appointment.email} - ${appointment.number} - ${appointment.date} - ${appointment.time} - ${appointment.doctor}`;
    appointmentList.appendChild(appointmentItem);
}
