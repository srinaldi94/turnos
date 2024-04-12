import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrearCitasComponent } from './components/crear-citas/crear-citas.component';
import { ListCitasComponent } from './components/list-citas/list-citas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrearCitasComponent, ListCitasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  listCitasPadre: any[] = [];

  agregarCita(cita: any){
    this.listCitasPadre.push(cita);
  }

  eliminarCitaPadre(index: number){
    this.listCitasPadre.splice(index,1);
  }
}
