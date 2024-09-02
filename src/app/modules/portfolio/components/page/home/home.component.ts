import { Component } from '@angular/core';

//components
import { HeaderComponent } from '../../header/header.component';
import { KnowledgeComponent } from '../../knowledge/knowledge.component';
import { ExperiencesComponent } from '../../experiences/experiences.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowledgeComponent, ExperiencesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
