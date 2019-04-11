import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  ngOnInit(): void {

  }
  
  // Adding variables

  items: Observable<any[]>;
  contactForm: FormGroup;

// Setting the database 
  constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
    this.items = db.list('messages').valueChanges()

// Passing in MD_Bootstrap form validation 
    this.contactForm = fb.group({
    itemName: ['', Validators.required],
    itemLastName: ['', Validators.required],
    itemEmail: ['', [Validators.required, Validators.email]],
    itemSubject: ['', Validators.required],
    itemMessage: ['', Validators.required]
 });
   }
// Pushing the contact-form to the firebase data base
   onSubmit()  {
   this.db.list('/messages').push({ name: this.contactForm.value.itemName, email: this.contactForm.value.itemEmail, subject: this.contactForm.value.itemSubject, 
   message: this.contactForm.value.itemMessage});
   
//Popup message
   alert('Thank you for contacting us, your message has gone through!')
  }
  // Clearing the form after submit
  clearForm() {
    this.contactForm.reset();
  }
}


