import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

import { GuestbookEntry } from "../models/guestbook-entry.model";

@Injectable()
export class GuestbookService {

    constructor(private http: Http) { }

    public getGuestbookEntries(): Observable<GuestbookEntry[]> {
        return this.http.get("http://naturheilpraxis-hale.de/api/guestbook.php")
            .map(this.handleResponse);
    }

    public sendGuestbookEntry(author: string, content: string, headline: string): void {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        let entry: string = "body=" + author + "?#?" + content + "?#?" + headline;
        this.http.post('http://naturheilpraxis-hale.de/api/insert.php', entry, options).subscribe(res => {
            console.log('post result %o', res);
        });
    }

    private handleResponse(res: Response): GuestbookEntry[] {
        let entries: GuestbookEntry[] = [];
        let data: any = <any>res.json();
        for (let entry of data) {
            entries.push(
                new GuestbookEntry()
                    .setAuthor(entry.author)
                    .setContent(entry.content)
                    .setHeadline(entry.headline)
                    .setDate(entry.date)
            );
        };
        return entries;
    }
}