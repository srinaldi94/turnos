import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-citas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-citas.component.html',
  styleUrl: './crear-citas.component.css'
})
export class CrearCitasComponent {

  nombre: string = "";
  fecha: string = "";
  hora: string = "";
  sintomas: string = "";

  @Output() nuevaCita = new EventEmitter<any>;

  formularioIncorrecto: boolean = false;

  agregarCita(){
    if(this.nombre === "" || this.fecha === "" || this.fecha === "" || this.sintomas === ""){
      this.formularioIncorrecto = true;
      return
    }
    this.formularioIncorrecto = false;
    const cita = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    this.nuevaCita.emit(cita);
    this.resetCampos();
  }


  resetCampos(){
    this.nombre = "";
    this.fecha = "";
    this.hora = "";
    this.sintomas = "";
  }


}
