import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-swimming',
  standalone: true,
  imports: [],
  templateUrl: './swimming.component.html',
  styleUrl: './swimming.component.scss'
})
export class SwimmingComponent {
  @Output() emitData:EventEmitter<string> = new EventEmitter();

  onFire() {
    this.emitData.emit('share data from child to parentssss');
  }
}
