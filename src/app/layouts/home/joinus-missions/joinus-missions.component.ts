import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { PrivacyModalComponent } from '../../../shared/privacy-modal/privacy-modal.component';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-joinus-missions',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule, 
    // HttpClientModule,
    MatDialogModule,
    TranslateModule,
    MatIconModule,
  ],
  // providers: [provideHttpClient(withFetch())],
  templateUrl: './joinus-missions.component.html',
  styleUrl: './joinus-missions.component.scss'
})
export class JoinusMissionsComponent  {

  
  readonly ESPANOL = "es";
  readonly ENGLISH = "en";
  readonly DEUTSCH = "de";


  misioneroForm: FormGroup;
  enviadoConExito: boolean = false;
  envioFallido: boolean  = false;


  constructor(
      private fb: FormBuilder,
      private http: HttpClient,
      private dialog: MatDialog,
      public translate: TranslateService,
  ) {

      this.misioneroForm = this.fb.group({
          nombre: ['', Validators.required],
          apellidos: ['', Validators.required],
          email: ['', [Validators.required, this.emailValidator]],
          // this.asyncPhoneValidator.bind(this)
          telefono: ['', Validators.required, this.asyncPhoneValidator],
          localidad: ['', Validators.required],
          pais: ['', Validators.required],
          testimonio: ['', Validators.required, this.asyncTestimonyValidator],
          idioma: ['', Validators.required],
          privacidad: [false, Validators.requiredTrue],
      });

      this.misioneroForm.get('email')?.valueChanges.subscribe((newValue) => {
          if (newValue!=null && newValue!=='') {
              this.enviadoConExito = false;
              this.envioFallido = false;
          } 
      });

  }


  asyncPhoneValidator(control: AbstractControl): Promise<ValidationErrors | null> {
      return new Promise(resolve => {
          const isValid = /^\+\d{1,4}\d{6,14}$/.test(control.value);
          resolve(isValid ? null : { invalidPhone: true });
      });
  }


  emailValidator(control: AbstractControl): ValidationErrors | null {
      const email = control.value;
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!regex.test(email)) {
          return { invalidEmail: true };
      }
      return null;
  }

  asyncTestimonyValidator(control: AbstractControl): Promise<ValidationErrors | null> {
      return new Promise(resolve => {
          // const isValid = /^\+\d{1,4}\d{6,14}$/.test(control.value);
          const maxLength = 4000;
          const isValid = control.value ? control.value.length <= maxLength : true
          resolve(isValid ? null : { maxLengthExceeded: true });
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

          this.http.post('https://www.gamamission.org/api/savepotenmisionero', formData).subscribe(
              (response) => {
                // console.log('Formulario enviado con éxito:', response);
                this.enviadoConExito = true; // Muestra el mensaje de éxito
                this.envioFallido = false;

                this.misioneroForm.reset();

                    // Limpia el formulario y sus errores
                Object.keys(this.misioneroForm.controls).forEach(controlName => {
                  const control = this.misioneroForm.get(controlName);
                  control?.markAsPristine(); // Marca como no modificado
                  control?.markAsUntouched(); // Marca como no tocado
                  control?.setErrors(null); // Limpia cualquier error remanente
                });

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
