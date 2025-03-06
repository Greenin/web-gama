import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
// import { provideHttpClient, withFetch } from '@angular/common/http';
// import provideHttpClient;

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PrivacyModalComponent } from '../../../shared/privacy-modal/privacy-modal.component';


@Component({
  selector: 'app-joinus-missions',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    // HttpClientModule,
    MatDialogModule,
  ],
  // providers: [provideHttpClient(withFetch())],
  templateUrl: './joinus-missions.component.html',
  styleUrl: './joinus-missions.component.scss'
})
export class JoinusMissionsComponent {

  misioneroForm: FormGroup;
  enviadoConExito: boolean = false;
  envioFallido: boolean  = false;


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dialog: MatDialog,

  ) {

    this.misioneroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      privacidad: [false, Validators.requiredTrue],
    });

  }



  
  openPrivacidadModal(event: Event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    this.dialog.open(PrivacyModalComponent, {
      width: '600px', // Ajusta el ancho del modal
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





}
