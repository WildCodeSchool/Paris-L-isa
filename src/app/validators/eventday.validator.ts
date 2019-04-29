import { FormControl, Validators } from '@angular/forms';

export class eventDayValidator extends Validators {
    eventDayCheck(control: FormControl) {
        return (control.value < 1 || control.value > 31) || control.value.length > 2 ? 
        true :
        null;
    }
}