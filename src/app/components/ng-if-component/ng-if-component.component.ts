import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-component',
  templateUrl: './ng-if-component.component.html',
  styleUrls: ['./ng-if-component.component.css']
})
export class NgIfComponentComponent {
  booleano = true;

  changeBoolean(): void {
    this.booleano = !this.booleano;
  }
}
