import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PrivacyModalComponent } from '../../shared/privacy-modal/privacy-modal.component';
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

  misioneroForm: FormGroup;
  enviadoConExito: boolean = false;

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

      // Envía los datos a Formspree
      this.http.post('https://formspree.io/f/xjvawjkq', formData).subscribe(
        (response) => {
          console.log('Formulario enviado con éxito:', response);
          this.enviadoConExito = true; // Muestra el mensaje de éxito

          // Envía el correo electrónico
          this.enviarCorreo(formData.email);
        },
        (error) => {
          console.error('Error al enviar el formulario:', error);
          alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        }
      );
    }
  }

  enviarCorreo(email: string) {
    const asunto = 'Suscripción a misionero GAMA';
    const cuerpo = `
Hola,

Desde la Asociación del Movimiento de Avivamiento Global, GAMA, le felicitamos por su aplicación para realizar misiones evangélicas por las naciones.

Por favor, a continuación pulse en el siguiente enlace para navegar a nuestra página web de la asociación, y continuar completando su perfil de usuario:

https://www.gamamission.org/#/unete-misiones

Muchas gracias por interés en continuar expandiendo el reino de Dios a todo el mundo.

Atentamente, Global Awakening Movement Association.
    `;

    // Simula el envío del correo (puedes usar un servicio de correo real aquí)
    console.log('Correo enviado a:', email);
    console.log('Asunto:', asunto);
    console.log('Cuerpo:', cuerpo);
  }

  openPrivacidadModal(event: Event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    this.dialog.open(PrivacyModalComponent, {
      width: '600px', // Ajusta el ancho del modal
    });
  }

  openPrayerRequestModal(event: Event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    this.dialog.open(PrayerRequestModalComponent, {
      width: '90vw', // Ajusta el ancho del modal para móviles
      maxWidth: '90vw', // Evita que el modal sea demasiado ancho
      maxHeight: '90vh', // Ajusta la altura máxima para móviles
    });
  }

  openContactUsModal(event: Event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    this.dialog.open(ContactUsModalComponent, {
      width: '600px', // Ajusta el ancho del modal
    });
  }

}



