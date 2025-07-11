import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal.model';
import { ActivatedRoute } from '@angular/router';

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
  logueado = false

  constructor(private animalService: AnimalService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.logueado = params['logueado']

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
    })
    })
  }

  eliminar(id: number): void {
    this.animalService.deleteAnimal(String(id)).subscribe({
      next: () => {
        this.animales = this.animales.filter(c => c.id !== id)
      },
      error: (err)=> {
        console.error('error al eliminar la publicacion')
      }
    })
  }

}
