export class Game {
  id: string = '';
  background_image: string = '';
  name: string = '';
  playtime: string = '';
  rating: string = '';
  ratingsCount: string = '';
  platforms: any;
  screenshots: [] = [];
  stores: [] = [];
  tags: [] = [];
  favoritedGame!: boolean;
}
