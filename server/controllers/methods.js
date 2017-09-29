const mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

module.exports = {

    createAppointment: function(req, res) {
        console.log('*** methods.js ***');
        let appointment = new Appointment(req.body);
        console.log(appointment);
        appointment.save(function(err) {
            if(err) {
                console.log('Something went wrong!', err);
                return res.json(err)
            }
            else {
                console.log('Passed', appointment)
                return res.json(appointment);
            }
        })
    },

    appointmentList: function(req, res) {
        console.log('*** methods.js - list ***');
        Appointment.find({}, function(err, appointmentList) {
            if(err) {
                console.log('*** GET ERROR ***')
            }
            res.json(appointmentList);
        })
    },

    destroy: function(req, res, id) {
        console.log('*** methods.js - destroy ***');
        Appointment.findByIdAndRemove(req.params.id, function(err) {
            if(err) {
                console.log('~~~ ERROR - destroy ~~~')
            }
            else {
                Appointment.find({}, function(err, appointmentList) {
                    res.json(appointmentList);
                })
            }
        })
    }
}