export class UserGridConfiguration {
  constructor(
    private readonly mainUrl: string,
    private readonly userGridUrl: string,
    private readonly _someUrl: string
  ) {
  }

  public get getUserGridUrl(): string {
    return `${this.mainUrl}/${this.userGridUrl}`;
  }

  public get someUrl(): string {
    return `${this.mainUrl}/${this._someUrl}`;
  }

}
