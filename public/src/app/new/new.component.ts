import { Component, OnInit } from '@angular/core';
import { AppointmentService } from'../appointment.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Router,ActivatedRoute } from '@angular/router';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  user;

  appointmentList = [];
  appointment = new Appointment();

  constructor(private _appointmentservice: AppointmentService, private _route: ActivatedRoute, private _router: Router) {
    this._appointmentservice.appointmentListObserver.subscribe((appointmentList) => {
      this.appointmentList = appointmentList;
    })
    this.user = this._appointmentservice.currentUser;
    console.log(this.user);
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log('*** component - onSubmit ***');
    this.appointment.patient = this.user;
    this._appointmentservice.createAppointment(this.appointment);
    this.appointmentList.push(this.appointment);
    this._router.navigate(['/'])
  }

}
