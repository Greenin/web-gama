import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-columns',
  standalone: true,
  imports: [],
  templateUrl: './columns.component.html',
  styleUrl: './columns.component.scss'
})
export class ColumnsComponent {


    readonly ESPANOL = "es";
    readonly ENGLISH = "en";
    readonly DEUTSCH = "de";


    constructor(
        public translate: TranslateService,
    ) {
    }


}
