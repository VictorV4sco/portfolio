import { Component, signal } from '@angular/core';

//interface
import { IProjects } from '../interface/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/spring-project.png',
      alt: 'Spring Project',
      title: 'library',
      width: '100px',
      height: '51px',
      description: 
        '<p>Library API project</p>',
      links: [
        {
          name: 'See the project',
          href: 'https://github.com/VictorV4sco/library',
        },
      ],
    },
  ]);
}
