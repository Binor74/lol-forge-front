import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChampionsService } from "../../core/services/champions.service";
import { Champions } from "../../core/models/champions.entity";

@Component({
    selector: 'app-champions-list',
    templateUrl: './champions-list.component.html',
    styleUrls: ['./champions-list.component.scss'],
    imports: [CommonModule],
})
export class ChampionsListComponent implements OnInit {

    private championsService = inject(ChampionsService);
    
    champions: Record<string, Champions> = {};
    championNames: string[] = [];

    ngOnInit(): void {
        this.championsService.getChampions().subscribe({
            next: (data) => {
                this.champions = data;
                this.championNames = Object.keys(data);
                console.log('Champions:', data);
            },
            error: (error) => {
                console.error('Error fetching champions:', error);
            }
        });
    }
}