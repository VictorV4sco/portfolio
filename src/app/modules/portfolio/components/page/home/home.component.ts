import { Component } from '@angular/core';

//components
import { HeaderComponent } from '../../header/header.component';
import { KnowledgeComponent } from '../../knowledge/knowledge.component';
import { ExperiencesComponent } from '../../experiences/experiences.component';
import { ProjectsComponent } from '../../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: 
  [
    HeaderComponent, 
    KnowledgeComponent, 
    ExperiencesComponent, 
    ProjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
