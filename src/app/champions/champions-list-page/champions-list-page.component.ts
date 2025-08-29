import { Component } from "@angular/core";
import { ChampionsListComponent } from "../champions-list/champions-list.component";


@Component({
    selector: 'app-champions-list-page',
    templateUrl: './champions-list-page.component.html',
    styleUrls: ['./champions-list-page.component.scss'],
    imports: [ChampionsListComponent],
})
export class ChampionsListPageComponent {
    title = 'Champions List';
}