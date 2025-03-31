import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-requirements',
  standalone: true,
  imports: [],
  templateUrl: './requirements.component.html',
  styleUrl: './requirements.component.scss'
})
export class RequirementsComponent {

    readonly ESPANOL = "es";
    readonly ENGLISH = "en";
    readonly DEUTSCH = "de";


    constructor(
        public translate: TranslateService,
    ) {
    }

}
