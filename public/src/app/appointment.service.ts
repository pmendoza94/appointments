import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observer, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs';
import { Appointment } from './appointment';

@Injectable()
export class AppointmentService {
  currentUser;
  userObserver = new BehaviorSubject(this.currentUser);

  appointment;
  appointmentObserver = new BehaviorSubject(this.appointment);

  appointmentList = [];
  appointmentListObserver = new BehaviorSubject(this.appointmentList);

  constructor(private _http: Http) { }

  createAppointment(appointment){
    console.log('*** service - createAppointment ***');
    return this._http.post('/create_appointment', appointment)
    .map( data => data.json() )
    .toPromise();
  }

  retrieveAppointments() {
    console.log('*** service - retrieveAppointments ***');
    return this._http.get('/appointment_list')
    .subscribe ( 
      (response) => {
        this.appointmentList = response.json()
        this.appointmentListObserver.next(this.appointmentList);
      },
      (err) => {
        console.log('*** ERROR - retrieveAppointments ***', err)
      }
    )
  }

  cancelApp(id) {
    console.log('*** service - cancelApp ***');
    return this._http.delete(`/appointment/${id}`)
    .subscribe(
      (response) => {
        this.appointment = response.json()
        this.retrieveAppointments();
      },
      (err) => {
        console.log('*~*~ ERROR - cancelApp *~*~')
      }
    )
  }

}
