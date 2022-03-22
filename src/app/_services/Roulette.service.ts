import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment.prod';
import {RouletteModel, RouletteStatusDto} from '../_model/Roulette.model';

@Injectable({providedIn: 'root'})
export class RouletteService {
    constructor(private http: HttpClient) { }

    getAllRoulette(): Observable<RouletteModel> {
    return this.http.get<RouletteModel>(`${environment.roulette}/v1/roulette`);
  }

  create(rouletteModel: RouletteStatusDto): Observable<any> {
    return this.http.post<any>(`${environment.roulette}/v1/roulette/create`, rouletteModel);
  }

  updateState(id: number, rouletteModel: RouletteStatusDto): Observable<any> {
    return this.http.put<any>(`${environment.roulette}/v1/roulette/open/${id}`, rouletteModel);
  }

  updateClose(id: number, rouletteModel: RouletteStatusDto): Observable<any> {
    return this.http.put<any>(`${environment.roulette}/v1/roulette/close/${id}`, rouletteModel);
  }

}
