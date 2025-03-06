import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-legal-notice-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './legal-notice-modal.component.html',
  styleUrl: './legal-notice-modal.component.scss'
})
export class LegalNoticeModalComponent {
  constructor(public dialogRef: MatDialogRef<LegalNoticeModalComponent>) {}

}
