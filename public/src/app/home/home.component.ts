import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser;

  appointmentList = [];

  searchTerms = '';

  id;

  constructor(private _appointmentservice: AppointmentService, private _router: Router, private _route: ActivatedRoute) { 
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this.id = params.get('id');
    })

    this._appointmentservice.appointmentListObserver.subscribe((appointmentList) => {
      this.appointmentList = appointmentList;
    })
    this.allAppointments()
      this.currentUser = this._appointmentservice.currentUser
    
   }

  ngOnInit() {
    while(this._appointmentservice.currentUser == '' || this._appointmentservice.currentUser == null) {
      this._appointmentservice.currentUser = prompt('Please enter your name.');
      console.log(this._appointmentservice.currentUser)
    }
    this.currentUser = this._appointmentservice.currentUser
  }

  allAppointments() {
    this._appointmentservice.retrieveAppointments();
  }

  cancelApp(id) {
    this._appointmentservice.cancelApp(id);
  }

}
