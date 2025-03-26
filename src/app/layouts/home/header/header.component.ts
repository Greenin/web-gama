import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactUsModalComponent } from '../../../shared/contact-us-modal/contact-us-modal.component';
import { PrayerRequestModalComponent } from '../../../shared/prayer-request-modal/prayer-request-modal.component';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
      CommonModule, 
      MatMenuModule, 
      MatIconModule,
      HttpClientModule,
      MatDialogModule,
      MatListModule,
      TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    readonly ESPANOL = "es";
    readonly ENGLISH = "en";
    readonly DEUTSCH = "de";

    currentLang = "";

    
    isMenuOpen: boolean = false;

    isSubmenuOpen: boolean = false; // Estado inicial del submenú


    constructor(
        private dialog: MatDialog,
        public translate: TranslateService,
    ) {
        // Establece el idioma por defecto (por ejemplo, español)
        // this.translate.setDefaultLang(this.currentLang);
        // this.currentLang = this.translate.currentLang;
    }


    selectLanguage(selectedLang: string) {
      // this.currentLang = selectedLang;
      this.translate.use(selectedLang); 
    } 


    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
        this.isSubmenuOpen = false;
    } 


    clickMenuAddress(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (this.isMenuOpen) {
            this.toggleMenu(); // Cierra el menú después de desplazarse
        }
    }


    toggleSubmenu(event: Event): void {
        event.preventDefault(); // Evita la recarga de la página
        this.isSubmenuOpen = !this.isSubmenuOpen; // Alterna el estado del submenú
    }


    openContactUsModal(event: Event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        this.dialog.open(ContactUsModalComponent, {
            width: '600px', // Ajusta el ancho del modal
        });
    }


    openPrayerRequestModal(event: Event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        this.dialog.open(PrayerRequestModalComponent, {
            width: '600px', // Ajusta el ancho del modal
        });
    }


}
