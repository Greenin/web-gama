import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mission-info',
  standalone: true,
  imports: [],
  templateUrl: './mission-info.component.html',
  styleUrl: './mission-info.component.scss'
})
export class MissionInfoComponent {

    readonly ESPANOL = "es";
    readonly ENGLISH = "en";
    readonly DEUTSCH = "de";


    constructor(
        public translate: TranslateService,
    ) {
    }
}
