import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { NewsService } from "../shared/services/news.service";

import { NewsEntry } from "../shared/models/news-entry.model";

@Component({
  selector: 'aktuelles-add-entry',
  templateUrl: './aktuelles-add-entry.component.html',
  styleUrls: ['./aktuelles-add-entry.component.sass']
})
export class AktuellesAddEntryComponent implements OnInit {

  private entries: NewsEntry[] = [];
  private userEntry: NewsEntry = new NewsEntry()
    .setAuthor("")
    .setContent("")
    .setHeadline("")
    .setDate("" + new Date());

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() { }

  private sendEntry(): void {
    this.newsService.sendEntry(this.userEntry.getAuthor(), this.userEntry.getContent(), this.userEntry.getHeadline());
    this.userEntry
      .setAuthor("")
      .setContent("")
      .setHeadline("")
      .setDate("" + new Date());
    setTimeout(() => {
      this.router.navigate(['/aktuelles']);
    }, 1000);
  }
}