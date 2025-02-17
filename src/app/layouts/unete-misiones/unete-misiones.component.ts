import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PrivacyModalComponent } from '../../shared/privacy-modal/privacy-modal.component';
import { ContactUsModalComponent } from '../../shared/contact-us-modal/contact-us-modal.component';


@Component({
  selector: 'app-unete-misiones',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatMenuModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule
  ],
  templateUrl: './unete-misiones.component.html',
  styleUrl: './unete-misiones.component.scss'
  // styles: ``
})
export class UneteMisionesComponent {

  misioneroForm: FormGroup;

  constructor(
      private fb: FormBuilder, 
      private http: HttpClient,
      private dialog: MatDialog
    ) {
    this.misioneroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ciudad: ['', Validators.required],
      pais: ['', Validators.required],
      telefono: ['', Validators.required],
      cumpleaños: ['', Validators.required],
      lenguaje: ['', Validators.required],
      testimonio: ['', Validators.required],
      iglesia: ['', Validators.required],
      motivacion: ['', Validators.required],
      pastor: ['', Validators.required],
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
          alert('¡Formulario enviado con éxito!');
        },
        (error) => {
          console.error('Error al enviar el formulario:', error);
          alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        }
      );
    }
  }

  openPrivacidadModal(event: Event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    this.dialog.open(PrivacyModalComponent, {
      width: '600px', // Ajusta el ancho del modal
    });
  }

  openContactUsModal(event: Event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    this.dialog.open(ContactUsModalComponent, {
      width: '600px', // Ajusta el ancho del modal
    });
  }

}
