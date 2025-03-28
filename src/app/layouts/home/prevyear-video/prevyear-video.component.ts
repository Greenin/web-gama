import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-prevyear-video',
  standalone: true,
  imports: [],
  templateUrl: './prevyear-video.component.html',
  styleUrl: './prevyear-video.component.scss'
})
export class PrevyearVideoComponent {


    readonly ESPANOL = "es";
    readonly ENGLISH = "en";
    readonly DEUTSCH = "de";

  
    constructor(
        public translate: TranslateService,
    ) {
    }


}
