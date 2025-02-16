import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  // title = 'web-gama';

  constructor(private router: Router) {}

  irAUneteMisiones() {
    this.router.navigate(['unete-misiones']);
  } 

}



