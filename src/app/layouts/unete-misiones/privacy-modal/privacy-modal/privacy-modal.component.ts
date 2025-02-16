import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-privacidad-modal',
  templateUrl: './privacidad-modal.component.html',
  styleUrls: ['./privacidad-modal.component.scss'],
})
export class PrivacidadModalComponent {
  constructor(public dialogRef: MatDialogRef<PrivacidadModalComponent>) {}
}