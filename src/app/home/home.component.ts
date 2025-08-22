import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    @Input({required: true , alias: 'dataAliasAhmedSamir', transform:(value:String ) => value.toUpperCase()}) getDataFromParen: String = '';
  

}
