import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-currentyear-tour',
  standalone: true,
  imports: [],
  templateUrl: './currentyear-tour.component.html',
  styleUrl: './currentyear-tour.component.scss'
})
export class CurrentyearTourComponent {


    readonly ESPANOL = "es";
    readonly ENGLISH = "en";
    readonly DEUTSCH = "de";


    constructor(
        public translate: TranslateService,
    ) {
    }

}
