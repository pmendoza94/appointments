const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new mongoose.Schema({
    date: {type: String, required: true},
    time: {type: String},
    patient: {type: String, required: true},
    complain: {type: String, required: true}
})

mongoose.model('Appointment', AppointmentSchema);
