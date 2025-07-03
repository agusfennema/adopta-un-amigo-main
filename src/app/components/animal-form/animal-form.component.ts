import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animal-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})

export class AnimalFormComponent {
    animal : Animal = {
    id: -1,
    nombre: '',
    especie: '',
    edad: 0,
    fotoUrl: '',
    descripcion: '',
    adoptado: false 
    }

    constructor(private animalService: AnimalService) {}

    agregar() {
      if (this.animal.nombre) {
      this.animalService.addAnimal(this.animal).subscribe(res => {
        console.log('Animal agregado!', res);
        this.animal = {
        id: -1,
        nombre: '',
        especie: '',
        edad: 0,
        fotoUrl: '',
        descripcion: '',
        adoptado: false
      };
      });
    }
    }
    
}
