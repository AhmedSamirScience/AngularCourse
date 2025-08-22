import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  @Input() getDataFromParen: String = '';

  x:String = 'Hello from Contact Component';
  y:String = 'Hello from Contact Component 2';

}
