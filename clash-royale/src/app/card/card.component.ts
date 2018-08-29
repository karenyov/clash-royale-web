import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardService]
})
export class CardComponent implements OnInit {

  cards: any = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getCards();
  }

  getCards() {
    this.cardService.getCards().subscribe(
      data => this.cards = data['cards']
    );
  }

  trackByCards(index, item) {
    return index;
  }

}
