import { Component, Input, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Game } from 'src/app/shared/game.model';
import { GameDetailsService } from 'src/app/shared/game-details.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class GameComponent implements OnInit {
  @Input() game!: Game;
  selected: boolean = false;
  selectedGameDetails: any;
  loading!: boolean;
  addToFavText: string = 'Add To Favorites';

  constructor(private GameDetailsService: GameDetailsService) {}

  ngOnInit(): void {}

  async selectCard() {
    this.selected = !this.selected;
    this.loading = true;
    this.selectedGameDetails = await this.GameDetailsService.fetchGameDetails(
      this.game.id
    );
    this.loading = false;
    if (!this.game.favoritedGame) this.addToFavText = 'Add to Favorites';
    else this.addToFavText = 'Remove From Favorites';
  }

  handleFavoriteEvent() {
    this.game.favoritedGame = !this.game.favoritedGame;
    if (this.game.favoritedGame === false) {
      this.addToFavText = 'Remove From Favorites';
      this.GameDetailsService.removeFromFavorite(this.selectedGameDetails.id);
    } else {
      this.addToFavText = 'Add to Favorites';
      this.GameDetailsService.addToFavorite(this.selectedGameDetails.id);
    }
  }

  seeMoreDetails() {}
}
