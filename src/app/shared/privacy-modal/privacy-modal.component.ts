import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-privacy-modal',
  standalone: true, // Indica que es un componente standalone
  imports: [CommonModule, MatDialogModule, MatButtonModule], // Importa los módulos necesarios
  templateUrl: './privacy-modal.component.html',
  styleUrls: ['./privacy-modal.component.scss'],
})
export class PrivacyModalComponent {
  constructor(public dialogRef: MatDialogRef<PrivacyModalComponent>) {}
}