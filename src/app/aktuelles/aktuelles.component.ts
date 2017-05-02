import { Component, OnInit } from '@angular/core';

import { NewsService } from '../shared/services/news.service';

import { NewsEntry } from '../shared/models/news-entry.model';

@Component({
  selector: 'app-aktuelles',
  templateUrl: './aktuelles.component.html',
  styleUrls: ['./aktuelles.component.sass']
})
export class AktuellesComponent implements OnInit {

  private entries: NewsEntry[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getEntries();
  }

  private getEntries(): void {
    this.newsService.getEntries()
      .subscribe((res: NewsEntry[]) => this.entries = res, err => console.log(err));
  }

}
