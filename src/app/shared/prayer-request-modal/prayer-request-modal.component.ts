import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prayer-request-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDialogModule,
    FormsModule
  ],
  templateUrl: './prayer-request-modal.component.html',
  styleUrl: './prayer-request-modal.component.scss'
})
export class PrayerRequestModalComponent {

  mensaje: string = '';
  email: string = '';

  constructor(
    public dialogRef: MatDialogRef<PrayerRequestModalComponent>,
    private http: HttpClient
  ) {}

  onCancel(): void {
    this.dialogRef.close(); // Cierra el modal
  }

  onEnviar(): void {
    if (this.mensaje && this.email) {
      const formData = { mensaje: this.mensaje, email: this.email };

      // Envía los datos a Formspree
      this.http.post('https://formspree.io/f/xjvawjkq', formData).subscribe(
        (response) => {
          console.log('Petición enviada con éxito:', response);
          this.dialogRef.close(); // Cierra el modal después de enviar
        },
        (error) => {
          console.error('Error al enviar la petición:', error);
          alert('Hubo un error al enviar la petición. Por favor, inténtalo de nuevo.');
        }
      );
    }
  }


}
