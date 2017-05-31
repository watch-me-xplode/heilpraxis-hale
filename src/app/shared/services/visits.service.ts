import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VisitsService {

    constructor(private http: Http) { }

    public getVisitsCounter(): Observable<number> {
        return this.http.get('http://naturheilpraxis-hale.de/api/getVisits.php')
            .map(this.handleResponse);
    }

    public addVisit(): void {
        this.http.post('http://naturheilpraxis-hale.de/api/addVisit.php', null, null).subscribe(res => {
            // console.log('post result %o', res);
        });
    }

    private handleResponse(res: Response): number {
        return <any>res.json();
    }
}