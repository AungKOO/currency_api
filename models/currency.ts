class Currency {
  
  private id: string = '';
  private date: Date = new Date();
  private currency: string = '';
  constructor() {
    return this
  }
  public getId(): string {
    return this.id;
  }
  public setId(value: string) {
    this.id = value;
  }
  public getDate(): Date {
    return this.date;
  }
  public setDate(value: Date) {
    this.date = value;
  }
  public getCurrency(): string {
    return this.currency;
  }
  public setCurrency(value: string) {
    this.currency = value;
  }
  
}
