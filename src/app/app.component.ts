import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Capitán América';
  nombre2 = 'cApiTÁN amÉRIcA';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number =  Math.PI;
  porcentaje = 0.235;
  salario = 1234.5;
  fecha: Date = new Date();
  activar: boolean = false;
  idioma = 'es';
  videoUrl = 'https://www.youtube.com/embed/REEOyXVdjBQ';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego el dato');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

}
