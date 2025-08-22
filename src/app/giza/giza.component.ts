import { Component } from '@angular/core';

@Component({
  selector: 'app-giza',
  standalone: true,
  imports: [],
  templateUrl: './giza.component.html',
  styleUrl: './giza.component.scss'
})
export class GizaComponent {

  userAge: String = '25';
  userName: String = 'Ahmed';
  userRole: String = 'admin';

}
