import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { ContactUsModalComponent } from '../../shared/contact-us-modal/contact-us-modal.component';

import { PrivacyModalComponent } from '../../shared/privacy-modal/privacy-modal.component';
import { LegalNoticeModalComponent } from '../../shared/legal-notice-modal/legal-notice-modal.component';
import { PrayerRequestModalComponent } from '../../shared/prayer-request-modal/prayer-request-modal.component';

import { IdentityComponent } from './identity/identity.component';
import { HeaderComponent } from './header/header.component';
import { TeamComponent } from './team/team.component';
import { TenyearsExperienceComponent } from './tenyears-experience/tenyears-experience.component';
import { PrevyearVideoComponent } from './prevyear-video/prevyear-video.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { ColumnsComponent } from './columns/columns.component';
import { MissionInfoComponent } from './mission-info/mission-info.component';
import { JoinusMissionsComponent } from './joinus-missions/joinus-missions.component';
import { LinksComponent } from './links/links.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    MatMenuModule, 
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    HeaderComponent,
    IdentityComponent,
    TeamComponent,
    TenyearsExperienceComponent,
    PrevyearVideoComponent,
    RequirementsComponent,
    ColumnsComponent,
    MissionInfoComponent,
    JoinusMissionsComponent,
    LinksComponent,
    MatCardModule,
    MatListModule,
    TranslateModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {


    readonly ESPANOL = "es";
    readonly ENGLISH = "en";
    readonly DEUTSCH = "de";

    currentLang = this.ESPANOL;


    constructor(
        private dialog: MatDialog,
        public translate: TranslateService,
    ) {
        // Establece el idioma por defecto (por ejemplo, español)
        // this.translate.setDefaultLang(this.currentLang);
        this.translate.use(this.ESPANOL); 
    }


    // Método para actualizar el idioma según las variables
    // updateLanguage(): void {

    //     if (this.currentLang===this.ESPANOL) {
    //         this.translate.use(this.ESPANOL); 

    //     } else if (this.currentLang===this.ENGLISH) {
    //         this.translate.use(this.ENGLISH);
    //     } 
    //   // else if (this.currentLang===DEUTSCH) {
    //   //   this.translate.use('de'); 
    //   // }
    // }


//   enviarCorreo(email: string) {
//     const asunto = 'Suscripción a misionero GAMA';
//     const cuerpo = `
// Hola,

// Desde la Asociación del Movimiento de Avivamiento Global, GAMA, le felicitamos por su aplicación para realizar una misión evangélica por las naciones.

// Por favor, a continuación pulse en el siguiente enlace para navegar a la página web de la asociación, y continuar completando su perfil de usuario:

// https://www.gamamission.org/#/descargar-pdf

// Muchas gracias por interés en continuar expandiendo el reino de Dios a todo el mundo.

// Atentamente, Global Awakening Movement Association.

// Si usted no esperaba este mensaje en su buzón de correo electrónico, entonces hubo un error en el destinatario. Por lo que, simplemente ignórelo.
//     `;

//     // Simula el envío del correo (puedes usar un servicio de correo real aquí)
//     console.log('Correo enviado a:', email);
//     console.log('Asunto:', asunto);
//     console.log('Cuerpo:', cuerpo);
//   }



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
    

    openPrivacidadModal(event: Event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        this.dialog.open(PrivacyModalComponent, {
          width: '600px', // Ajusta el ancho del modal
        });
    }


    openLegalNoticeModal(event: Event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        this.dialog.open(LegalNoticeModalComponent, {
          width: '600px', // Ajusta el ancho del modal
          // height: '500px'
        });
    }


  // @HostListener('window:scroll', [])
  // onScroll(): void {
  //   const textElement = document.querySelector('.highlightText');

  //   if (textElement) {
  //     textElement.classList.add('vibrating');

  //     // Elimina la vibración después de 1 segundo
  //     clearTimeout(this.timeoutId);
  //     this.timeoutId = setTimeout(() => {
  //       textElement.classList.remove('vibrating');
  //     }, 200);
  //   }
  // }

}



