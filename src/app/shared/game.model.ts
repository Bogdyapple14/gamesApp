export class Game {
  id: string = '';
  background_image: string = '';
  name: string = '';
  description_raw: string = '';
  playtime: string = '';
  rating: string = '';
  ratings_count: string = '';
  platforms: any;
  screenshots: [] = [];
  stores: [] = [];
  tags: [] = [];
  website: string = '';
  favoritedGame!: boolean;
}
