import React from "react";
import ReactDOM from "react-dom";
import Appointment from './Appointment';
import AppointmentForm from './AppointmentForm';
import axios from 'axios';
import update from 'immutability-helper';

export default class Appointments extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      appointments: this.props.appointments,
      title: '',
      appt_time: ''
    }
  }

  onUserInput = (name, value) => {
    this.setState({
      [name]: value
    })
  } 

  onFormSubmit = () => {
    axios.post('/appointments', {
      appointment : {
        title: this.state.title,
        appt_time: this.state.appt_time
      }
    })
    .then(response => {
      let appt = update(this.state.appointments, {
        $splice: [[0, 0, response.data]]
      }).sort((a,b) => new Date(a.appt_time_) - new Date(b.appt_time))
      this.setState({
          appointments: appt.sort((a,b) => {return(new Date(a.appt_time) - new Date(b.appt_time))}),
          title: '',
          appt_time: ''
      })
    })
    .catch(error => console.log(error))
  }

  render () {
    return (
      <div>
        <AppointmentForm title={this.state.input_title} time={this.state.input_appt_time} onUserInput={this.onUserInput} onFormSubmit={this.onFormSubmit}/>
        <br />
        <br />
        {this.state.appointments.map(appointment => { return (<Appointment key={appointment.id} appointment={appointment} />) })}
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('appointments_data')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
    <Appointments appointments={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})

