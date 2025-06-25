import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animales',
  standalone: true,
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  animales: Animal[] = [];
  loading = true;
  error = '';

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalService.getAnimales().subscribe({
      next: (data) => {
        this.animales = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los animales.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
