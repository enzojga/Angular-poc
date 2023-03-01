import { Component } from '@angular/core';

@Component({
  selector: 'app-emit',
  templateUrl: './emit.component.html',
  styleUrls: ['./emit.component.css']
})
export class EmitComponent {
  number = 0;
  names = ['Enzo', 'Aiyu', 'Vitória'];
  onHandleClick(): void {
    if(this.number >= 2) {
      this.number = 0;
      return;
    }
    this.number++;
  }
}
