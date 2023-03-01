import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent {
  @Output() changeName: EventEmitter<any> = new EventEmitter();
  handleClick() {
    this.changeName.emit();
  }
}
