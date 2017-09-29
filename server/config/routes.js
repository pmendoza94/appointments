const mongoose = require('mongoose');
const path = require('path');
var Appointment = mongoose.model('Appointment');
const methods = require('../controllers/methods.js');

module.exports = function(app) {

    app.get('/', function(req, res) {
    });

    app.get('/appointment_list', function(req, res, next) {
        methods.appointmentList(req, res)
    })

    app.post('/create_appointment', (req, res, next) => {
        methods.createAppointment(req, res)
    });

    app.delete('/appointment/:id', function(req, res, next) {
        methods.destroy(req, res)
    })

    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve('./public/dist/index.html'))
    });


}