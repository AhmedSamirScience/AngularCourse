import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLinkActive }  from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    @Input({required: true , alias: 'dataAliasAhmedSamir', transform:(value:String ) => value.toUpperCase()}) getDataFromParen: String = '';
  

}
