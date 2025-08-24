import { Component, ContentChild, contentChild, ElementRef, ViewChild } from '@angular/core';
import { ChildoComponent } from '../childo/childo.component';

@Component({
  selector: 'app-parento',
  standalone: true,
  imports: [],
  templateUrl: './parento.component.html',
  styleUrl: './parento.component.scss'
})
export class ParentoComponent {

  @ContentChild('myp', {static: true}) myP!: ElementRef;

  @ContentChild(ChildoComponent, {static: true}) childo !:  ChildoComponent;
  @ContentChild('myp', {static: true , descendants  : true}) myp2!: ElementRef;

  @ContentChild('my', {static: true , descendants  : true}) my!: ElementRef;

  ngOnInit(): void  {
    console.log('Parento Component initialized');

    console.log(this.myP.nativeElement);
    console.log('**************');
    console.log(this.childo);
    this.childo.userEmail = 'new email from parento component';
    console.log(this.childo.userEmail);
    console.log('**************');
    console.log(this.myp2);
    console.log('**************');
    console.log(this.my);
    console.log('**************');


    console.log(this.childo.username);
  }
}
