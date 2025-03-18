import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';


import { ReactiveFormsModule } from '@angular/forms';
// import { MatSelectModule } from '@angular/material/select';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-contact-us-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './contact-us-modal.component.html',
  styleUrl: './contact-us-modal.component.scss'
})
export class ContactUsModalComponent {


  mensaje: string = '';
  email: string = '';

  contactForm: FormGroup;

  // enviadoConExito: boolean = false;
  envioFallido: boolean  = false;

  constructor (
      private fb: FormBuilder,
      public dialogRef: MatDialogRef<ContactUsModalComponent>,
      private http: HttpClient,
  ) {
      
      this.contactForm = this.fb.group({
          message: ['', Validators.required, this.asyncMessageValidator],
          email: ['', [Validators.required, this.emailValidator]],
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

  asyncMessageValidator(control: AbstractControl): Promise<ValidationErrors | null> {
      return new Promise(resolve => {
          // const isValid = /^\+\d{1,4}\d{6,14}$/.test(control.value);
          const maxLength = 4000;
          const isValid = control.value ? control.value.length <= maxLength : true
          resolve(isValid ? null : { maxLengthExceeded: true });
      });
  }


  onCancel(): void {
    this.dialogRef.close(); // Cierra el modal
  }

  onEnviar(): void {

      // if (this.mensaje && this.email) {
      //   const formData = { mensaje: this.mensaje, email: this.email };
      if (this.contactForm.valid) {
        const formData = this.contactForm.value;

        this.http.post('https://www.gamamission.org/api/sendcontactemail', formData).subscribe(
            (response) => {
              // console.log('Formulario enviado con éxito:', response);
              // this.enviadoConExito = true; // Muestra el mensaje de éxito
              this.envioFallido = false;

              this.dialogRef.close(); // Cierra el modal después de enviar

              // this.contactForm.reset();

              //     // Limpia el formulario y sus errores
              // Object.keys(this.contactForm.controls).forEach(controlName => {
              //   const control = this.contactForm.get(controlName);
              //   control?.markAsPristine(); // Marca como no modificado
              //   control?.markAsUntouched(); // Marca como no tocado
              //   control?.setErrors(null); // Limpia cualquier error remanente
              // });

              // Envía el correo electrónico
              // this.enviarCorreo(formData.email);
            },
            (error) => {
              this.envioFallido = true;
              // this.enviadoConExito = false;
              console.error('Error al enviar el formulario:', error);
              // alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
            }
        );

        // Envía los datos a Formspree
        // this.http.post('https://formspree.io/f/xjvawjkq', formData).subscribe(
        //   (response) => {
        //     console.log('Mensaje enviado con éxito:', response);
        //     this.dialogRef.close(); // Cierra el modal después de enviar
        //   },
        //   (error) => {
        //     console.error('Error al enviar el mensaje:', error);
        //     alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        //   }
        // );
      }
  }

}
