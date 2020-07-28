import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-demo',
  template: `
    <button class="dt-button" (click)="modalRoot.show()">Open modal</button>
    <app-modal #modalRoot
    
             [maximizable]="true"
               (closeModal)="onCloseModal()">
      <ng-container class="app-modal-header">WELCOME</ng-container>
      <ng-container class="app-modal-body">
        <h3></h3>
        <p>MINIMIZE AND MAXIMIZE AND CLOSE</p>
      </ng-container>
      <ng-container class="app-modal-footer">
        
        
      </ng-container>
    </app-modal>
  `,
})
export class ModalDemoComponent {

  onCloseModal() {}

}
