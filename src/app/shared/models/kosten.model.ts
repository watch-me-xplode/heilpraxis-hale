export class Kosten {
    private label: string;
    private price: number;
    private information: string;

    public getLabel(): string { return this.label; }
    public getPrice(): number { return this.price; }
    public getInformation(): string { return this.information; }
    public getPriceString(): string { return this.price + " €"; }

    public setLabel(label: string): Kosten { this.label = label; return this; }
    public setPrice(price: number): Kosten { this.price = price;  return this; }
    public setInformation(information: string): Kosten { this.information = information;  return this; }
}