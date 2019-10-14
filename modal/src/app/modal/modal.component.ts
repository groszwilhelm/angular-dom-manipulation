import { Component } from '@angular/core';

@Component({
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  public destory: () => void;

  public display = 'block';

  public hide(): void {
    this.display = 'none';
  }

  public close() {
    this.destory();
  }
}
