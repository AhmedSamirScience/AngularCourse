import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycletest',
  standalone: true,
  imports: [],
  templateUrl: './lifecycletest.component.html',
  styleUrl: './lifecycletest.component.scss'
})
export class LifecycletestComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() name: string = 'Angular';

  changeName() {
    this.name = 'React';
  }

  ngOnInit() {
    console.log(' ✌️ ngOnInit called ✌️ ');
  }

  ngOnChanges() {
    console.log(' ✌️ ngOnChanges called ✌️ ');
  }

  ngDoCheck() {
    console.log(' ✌️ ngDoCheck called ✌️ ');
  }

  ngAfterContentInit() {
    console.log(' ✌️ ngAfterContentInit called ✌️ ');
  }

  ngAfterContentChecked() {
    console.log(' ✌️ ngAfterContentChecked called ✌️ ');
  }

  ngAfterViewInit() {
    console.log(' ✌️ ngAfterViewInit called ✌️ ');
  }

  ngAfterViewChecked() {
    console.log(' ✌️ ngAfterViewChecked called ✌️ ');
  }

  ngOnDestroy() {
    console.log(' ✌️ ngOnDestroy called ✌️ ');
  }
}
