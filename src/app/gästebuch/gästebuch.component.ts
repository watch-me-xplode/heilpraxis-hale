import { Component, OnInit } from '@angular/core';

import { GuestbookService } from "../shared/services/guestbook.service";

import { GuestbookEntry } from "../shared/models/guestbook-entry.model";

@Component({
  selector: 'app-gästebuch',
  templateUrl: './gästebuch.component.html',
  styleUrls: ['./gästebuch.component.sass']
})
export class GästebuchComponent implements OnInit {

  private entries: GuestbookEntry[] = [];
  private userEntry: GuestbookEntry = new GuestbookEntry()
    .setAuthor("")
    .setContent("")
    .setHeadline("")
    .setDate("" + new Date());
    private editorOpen: boolean = false;

  constructor(private guestbookService: GuestbookService) { }

  ngOnInit() {
    this.getGuestbookEntries();
  }

  private toggleForm(): void {
    this.editorOpen = !this.editorOpen;
  }

  private sendEntry(): void {
    if (this.isRequirementsDone()) {
      this.toggleForm();
      this.guestbookService.sendGuestbookEntry(this.userEntry.getAuthor(), this.userEntry.getContent(), this.userEntry.getHeadline());
      this.userEntry
        .setAuthor("")
        .setContent("")
        .setHeadline("")
        .setDate("" + new Date());
      setTimeout(() => this.getGuestbookEntries(), 1000);
    }
  }

  private isRequirementsDone(): boolean {
    return this.isAuthorRequirementDone() && this.isContentRequirementDone() && this.isHeadlineRequirementDone();
  }

  private isAuthorRequirementDone(): boolean {
    if (this.userEntry.getAuthor().length < 1) {
      return false;
    }
    return true;
  }

  private isContentRequirementDone(): boolean {
    if (this.userEntry.getContent().length < 1) {
      return false;
    }
    return true;
  }

  private isHeadlineRequirementDone(): boolean {
    if (this.userEntry.getHeadline().length < 1) {
      return false;
    }
    return true;
  }

  private getGuestbookEntries(): void {
    this.guestbookService.getGuestbookEntries()
      .subscribe((res: GuestbookEntry[]) => this.entries = res, (err: Error) => console.log(err.message));
  }
}