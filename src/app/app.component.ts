import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  //template: '<p>user Phone : {{ userPhone}}</p>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userName = 'John Doe';
  dataStatus = 'active';
  userEmail = 'ahmed@Dev.com';
  userPhone = '123-456-7890';
  userStatus = false;
  isTrue:Boolean = false;

  getapi() {
    console.log('API called');
  }

  showAlert() {
    alert('Button clicked!');
  }
  showAlert2(event: any) {
    console.log('Input value:', event.target.value);
  }
  
}



 
