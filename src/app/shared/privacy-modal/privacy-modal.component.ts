import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-privacy-modal',
  standalone: true, // Indica que es un componente standalone
  imports: [
    CommonModule, 
    MatDialogModule, 
    MatButtonModule,
    TranslateModule,
  ], // Importa los módulos necesarios
  templateUrl: './privacy-modal.component.html',
  styleUrls: ['./privacy-modal.component.scss'],
})
export class PrivacyModalComponent {


    readonly ESPANOL = "es";
    readonly ENGLISH = "en";
    readonly DEUTSCH = "de";

    currentLang = "";



    constructor(
      public dialogRef: MatDialogRef<PrivacyModalComponent>,
      private translate: TranslateService,
    ) {
        this.currentLang = this.translate.currentLang;
    }


}