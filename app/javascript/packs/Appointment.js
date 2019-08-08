import React from 'react';
import moment from 'moment';

const Appointment = ({appointment}) => 
    <div>
        <br />
        <h4>{appointment.title}</h4>
        <p>{moment(appointment.appt_time).format('DD MMM YYYY, h:mm:ss a')}</p>
    </div>


export default Appointment;