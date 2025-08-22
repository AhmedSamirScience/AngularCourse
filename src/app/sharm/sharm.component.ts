import { Component } from '@angular/core';

@Component({
  selector: 'app-sharm',
  standalone: true,
  imports: [],
  templateUrl: './sharm.component.html',
  styleUrl: './sharm.component.scss'
})
export class SharmComponent {
  userAgeFromSharm = '20 from sharm';
  userNameFromSharm = 'Jane Doe from sharm';
  userEmailFromSharm = '@Yahoo.com from sharm';

}
