import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-cairo',
  standalone: true,
  imports: [],
  templateUrl: './cairo.component.html',
  styleUrl: './cairo.component.scss'
})
export class CairoComponent {

  @ViewChildren('el') allElls! : QueryList<ElementRef>;
  
  ngAfterViewInit(){
    console.log(this.allElls);

    this.allElls.forEach((el)=>{
      console.log(el.nativeElement.textContent);
      el.nativeElement.classList.add('bg-black' , 'text-white', 'p-2', 'my-2', 'd-block'); 
    })
  }
}
