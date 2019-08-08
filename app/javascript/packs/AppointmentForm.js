import React, { Component } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css'

class AppointmentForm extends Component {

    handleChange = e => {
        this.props.onUserInput(e.target.name, e.target.value)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onFormSubmit();
    }

    setAppTime = (e) => {
        let name = 'appt_time' 
        this.props.onUserInput(name, e.toDate())
    }

    render() {
        return (
            <div>
                <h3>Make a new appointment</h3>
                <br /><br />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="appointment_title">Title</label>
                        <input type="text" className="form-control" id="appointment_title" name="title" value={this.props.time} placeholder="Enter the details" onChange={this.handleChange} required/>
                    </div>
                    <br />
                    {/* <div class="form-group">
                        <div class="row">
                            <div class="col">
                                <label for="appt_date">Date</label>
                                <input type="text" class="form-control" placeholder="First name" />
                            </div>
                            <div class="col">
                                <label for="datetimepicker3">Time</label>
                                <div class="input-group date" id="datetimepicker3" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker3" />
                                    <div class="input-group-append" data-target="#datetimepicker3" data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-clock-o"></i></div>
                                    </div>
                                </div>
                            </div>
                            <script type="text/javascript">
                                $(function() {
                                    $('#datetimepicker3').datetimepicker()
                                });
                            </script>
                        </div>
                    </div> */}
                    <Datetime input={false} open={true} inputProps={{required: 'required'}} value={this.props.appt_time} onChange={this.setAppTime} />
                    <br /><br />
                    <button type="submit" className="btn btn-primary">Make Appointment</button>
                </form>
            </div>
        )
    }
}

export default AppointmentForm;