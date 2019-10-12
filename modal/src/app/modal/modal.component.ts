import { Component } from '@angular/core';

@Component({
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  public display = 'block';

  public hide(): void {
    this.display = 'none';
  }
}
