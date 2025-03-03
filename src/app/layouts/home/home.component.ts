import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PrivacyModalComponent } from '../../shared/privacy-modal/privacy-modal.component';
import { LegalNoticeModalComponent } from '../../shared/legal-notice-modal/legal-notice-modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PrayerRequestModalComponent } from '../../shared/prayer-request-modal/prayer-request-modal.component';
import { ContactUsModalComponent } from '../../shared/contact-us-modal/contact-us-modal.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatMenuModule, 
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    MatDialogModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  // title = 'web-gama';
  
  private timeoutId: any;


  misioneroForm: FormGroup;
  enviadoConExito: boolean = false;
  envioFallido: boolean  = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dialog: MatDialog
  ) {
    this.misioneroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      privacidad: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.misioneroForm.valid) {
      const formData = this.misioneroForm.value;

      //https://www.gamamission.org/savepotenmisionero
      //https://gamamission.org/savepotenmisionero
      //www.gamamission.org/savepotenmisionero
      //gamamission.org/savepotenmisionero
      //www.gamamission.org/api/savepotenmisionero
      //gamamission.org/api/savepotenmisionero
      //https://www.gamamission.org/api/savepotenmisionero
      //https://gamamission.org/api/savepotenmisionero
      //https://www.gamamission.org:80/savepotenmisionero
      //https://gamamission.org:80/savepotenmisionero
      //www.gamamission.org:80/savepotenmisionero
      //gamamission.org:80/savepotenmisionero
      this.http.post('https://www.gamamission.org/api/savepotenmisionero', formData).subscribe(
        (response) => {
          console.log('Formulario enviado con éxito:', response);
          this.enviadoConExito = true; // Muestra el mensaje de éxito
          this.envioFallido = false;

          // Envía el correo electrónico
          // this.enviarCorreo(formData.email);
        },
        (error) => {
          this.envioFallido = true;
          this.enviadoConExito = false;
          console.error('Error al enviar el formulario:', error);
          // alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        }
      );
    }
  }


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

  openPrayerRequestModal(event: Event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    this.dialog.open(PrayerRequestModalComponent, {
      width: '600px', // Ajusta el ancho del modal
    });
  }

  openContactUsModal(event: Event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    this.dialog.open(ContactUsModalComponent, {
      width: '600px', // Ajusta el ancho del modal
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



