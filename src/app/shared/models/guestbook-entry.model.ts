export class GuestbookEntry {

    private author: string;
    private content: string;
    private headline: string;
    private date: string

    public getAuthor(): string { return this.author; }
    public getContent(): string { return this.content; }
    public getHeadline(): string { return this.headline; }
    public getDate(): string { return this.date; }

    public setAuthor(author: string): GuestbookEntry { this.author = author; return this; }
    public setContent(content: string): GuestbookEntry { this.content = content.replace(/\r?\n/g, '\n'); return this; }
    public setHeadline(headline: string): GuestbookEntry { this.headline = headline; return this; }
    public setDate(date: string): GuestbookEntry { this.date = date; return this; }
}