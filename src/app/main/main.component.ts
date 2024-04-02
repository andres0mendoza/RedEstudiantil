import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


  posts: any[] = []; // Array para almacenar las publicaciones
  newPostContent: string = ''; // Variable para almacenar el contenido de la nueva publicación

  // Método para enviar una nueva publicación
  submitPost() {
    if (this.newPostContent.trim() !== '') {
      this.posts.unshift({ content: this.newPostContent }); // Agregar la nueva publicación al inicio de la lista
      this.newPostContent = ''; // Limpiar el contenido del formulario
    }
  }
  
}
