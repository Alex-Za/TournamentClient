export class UserGridConfiguration {
  constructor(private readonly userGridUrl: string) {
  }
  public get getUserGridUrl(): string {
    return this.userGridUrl;
  }
}
