import { EventEmitter, Injectable } from '@angular/core';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root',
})
export class GameDetailsService {
  private games: Game[] = [];
  private favoriteGames: any = [];
  shouldLoadGamesEmit = new EventEmitter();

  constructor() {}

  getGames() {
    return this.games;
  }

  getFavoriteGames() {
    return this.favoriteGames;
  }

  async fetchGames(search: string) {
    // Search by game series
    this.games.length = 0;
    if (search) {
      const res = await fetch(`https://api.rawg.io/api/games?search=${search}`);
      const data = await res.json();
      if (data.count > 1) {
        const games: [] = data.results;
        games.forEach((game: Game) => {
          game.favoritedGame = false;
          this.games.push(game);
        });
      } else if (data.count === 1) this.games.push(data);
      else alert(`${search} was not found.`);
    } else alert('Introduce a game to search please');
  }

  async fetchGameDetails(id: string) {
    const res = await fetch(
      `https://api.rawg.io/api/games/${id}?key=6dd6e8a44378428c852e733f6ba920d6`
    );
    const data = await res.json();
    return data;
  }

  addToFavorite(id: string) {
    const addedGame = this.games.filter((game) => {
      return game.id === id;
    });
    this.favoriteGames.push(...addedGame);
  }

  removeFromFavorite(id: string) {
    const gameToRemove = this.favoriteGames.filter((game: any) => {
      return game.id === id;
    });
    const gameToRemoveIndex = this.favoriteGames.indexOf(...gameToRemove);
    this.favoriteGames.splice(gameToRemoveIndex, 1);
  }
}
