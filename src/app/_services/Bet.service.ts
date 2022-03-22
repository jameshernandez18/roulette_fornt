import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment.prod';
import {BetDto, BetModel} from '../_model/Bet.model';


@Injectable({providedIn: 'root'})
export class BetService {
    constructor(private http: HttpClient) { }

  createBet(betDto: BetDto): Observable<any> {
    return this.http.post<any>(`${environment.roulette}/v1/bet/create`, betDto);
  }

  getById(id: number): Observable<BetModel> {
    return this.http.get<BetModel>(`${environment.roulette}/v1/bet/id/${id}`);
  }
}
