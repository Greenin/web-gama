import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-legal-notice-modal',
  standalone: true,
  imports: [
      CommonModule, 
      MatDialogModule, 
      MatButtonModule,
      TranslateModule,
  ],
  templateUrl: './legal-notice-modal.component.html',
  styleUrl: './legal-notice-modal.component.scss'
})
export class LegalNoticeModalComponent {


  readonly ESPANOL = "es";
  readonly ENGLISH = "en";
  readonly DEUTSCH = "de";

  currentLang = "";


  constructor(
    public dialogRef: MatDialogRef<LegalNoticeModalComponent>,
    private translate: TranslateService,
  ) {
      this.currentLang = this.translate.currentLang;
  }


}
