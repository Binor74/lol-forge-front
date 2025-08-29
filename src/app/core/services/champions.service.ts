import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Champions } from '../models/champions.entity';


@Injectable({
    providedIn: 'root'
})
export class ChampionsService {
    private apiUrl = 'http://localhost:8000/champions';

    constructor(private http: HttpClient) {}

    getChampions(): Observable<Record<string, Champions>> {
        return this.http.get<Record<string, Champions>>(this.apiUrl);
    }

    getChampionDetail(name: string): Observable<Champions> {
        return this.http.get<Champions>(`${this.apiUrl}/${name}`);
    }
}