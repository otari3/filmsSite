export class FilmModule {
  constructor(
    public title: string,
    public thumbnail: any,
    public year: number,
    public category: string,
    public rating: string,
    public isBookmarked: boolean,
    public isTrending: boolean
  ) {}
}
