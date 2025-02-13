import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule]
})
export class AppComponent {
  title = 'web-gama';

  constructor(private router: Router) {}

  irAUneteMisiones() {
    this.router.navigate(['unete-misiones']);
  } 
}
