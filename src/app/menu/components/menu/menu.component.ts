import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// app
import { MenuItem } from '../../interfaces/MenuItem';

@Component({
    moduleId: module.id,
    selector: 'seed-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    @Input() items: MenuItem[];

    constructor(private translate: TranslateService) { }

    switchLanguage(language: string) {
        this.translate.use(language);
    }
}
