import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-agenda-bo',
  templateUrl: './agenda-bo.component.html',
  styleUrls: ['./agenda-bo.component.scss']
})
export class AgendaBOComponent implements OnInit {
  eventForm : FormGroup;
  month;
  title;
  description;



  constructor(private fb: FormBuilder,
              private sendEventsService : EventsService) { }

  ngOnInit() {
    this.initEventForm();
  }

  initEventForm(){
    this.eventForm = this.fb.group({
      monthName: new FormControl('', [Validators.required]),
      eventTitle: new FormControl('', [Validators.required]),
      eventDescription: new FormControl('', [Validators.required]),
    })
  }

  sendEventInfos(){
    this.month = this.eventForm.get('monthName').value;
    console.log(this.month);
    this.title = this.eventForm.get('eventTitle').value;
    this.description = this.eventForm.get('eventDescription').value;
    this.sendEventsService.receiveData(this.month, this.title, this.description);
    console.log(this.eventForm);
  }

}
