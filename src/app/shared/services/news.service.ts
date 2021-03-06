import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

import { NewsEntry } from "../models/news-entry.model";

@Injectable()
export class NewsService {

    constructor(private http: Http) { }

    public getEntries(): Observable<NewsEntry[]> {
        return this.http.get("http://naturheilpraxis-hale.de/api/getNews.php")
            .map(this.handleResponse);
    }

    public sendEntry(author: string, content: string, headline: string): void {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        let entry: string = "body=" + author + "?#?" + content + "?#?" + headline;
        this.http.post('http://naturheilpraxis-hale.de/api/insertNews.php', entry, options).subscribe(res => {
            //console.log('post result %o', res);
        });
    }

    private handleResponse(res: Response): NewsEntry[] {
        let entries: NewsEntry[] = [];
        let data: any = <any>res.json();
        for (let entry of data) {
            entries.push(
                new NewsEntry()
                    .setAuthor(entry.author)
                    .setContent(entry.content)
                    .setHeadline(entry.headline)
                    .setDate(entry.date)
            );
        };
        return entries;
    }
}