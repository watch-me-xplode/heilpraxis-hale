export class NewsEntry {

    private author: string;
    private content: string;
    private headline: string;
    private date: string

    public getAuthor(): string { return this.author; }
    public getContent(): string { return this.content; }
    public getHeadline(): string { return this.headline; }
    public getDate(): string { return this.date; }

    public setAuthor(author: string): NewsEntry { this.author = author; return this; }
    public setContent(content: string): NewsEntry { this.content = content.replace(/\r?\n/g, '\n'); return this; }
    public setHeadline(headline: string): NewsEntry { this.headline = headline; return this; }
    public setDate(date: string): NewsEntry { this.date = date; return this; }
}