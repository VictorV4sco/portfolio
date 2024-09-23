import { Component, signal } from '@angular/core';

//interface
import { IKnowledge } from '../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html.svg',
      alt: 'Icone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css.svg',
      alt: 'Icone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Icone de conhecimento de java',
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'Icone de conhecimento de spring boot',
    },
    {
      src: 'assets/icons/knowledge/js.svg',
      alt: 'Icone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento de angular',
    },
    {
      src: 'assets/icons/knowledge/database.svg',
      alt: 'Icone de conhecimento de database',
    },
  ]);
}
