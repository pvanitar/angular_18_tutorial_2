import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //string, number, boolean, date

  courseName: string = "Angular 18"; 
  stateName: string = "Goa";
  inputType = "checkbox"; 
  myClassName: string = "bg-primary"; 
  rollNo: number  = 123; 
  isIndian: boolean = true; 
  currentDate: Date = new Date(); 

  firstName =  signal("vanita");

  constructor() {
     
  }

  changeCourseName() {
    this.courseName = "Angular";
    this.firstName.set("Sachin Tendulkar")
  }
  showAlert(message: string) {
      alert(message)
  }




}
