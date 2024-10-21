import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character-list.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {
  listCharacters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacterList().subscribe((resp) => {
      this.listCharacters = resp.results;
    });
  }
}
