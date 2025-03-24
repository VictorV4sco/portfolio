import { Component, inject, signal } from '@angular/core';

//interface
import { IProjects } from '../interface/IProjects.interface';

//material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//enum
import { EDiaLogPanelClass } from '../enum/EDialogPanelClass.enum';

//dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/spring-project.png',
      alt: 'Spring Project',
      title: 'Library',
      width: '100px', // 100px
      height: '70px', // 51px
      description: 
        '<p>Library API project</p>',
      links: [
        {
          name: 'See the project',
          href: 'https://github.com/VictorV4sco/library',
        },
      ],
    },
    {
      src: 'assets/img/projects/spring-project.png',
      alt: 'Spring Project',
      title: 'E-Commerce',
      width: '100px', // 100px
      height: '70px', // 51px
      description: 
        '<p>E-Commerce API project</p>',
      links: [
        {
          name: 'See the project',
          href: 'https://github.com/VictorV4sco/e-commerce',
        },
      ],
    },
    {
      src: 'assets/img/projects/spring-project.png',
      alt: 'Spring Project',
      title: 'Enterprise',
      width: '100px', // 100px
      height: '70px', // 51px
      description: 
        '<p>API project to enterprises</p>',
      links: [
        {
          name: 'See the project',
          href: 'https://github.com/VictorV4sco/enterprise',
        },
      ],
    },

    {
      src: 'assets/img/projects/spring-project.png',
      alt: 'Spring Project',
      title: 'Consult',
      width: '100px', // 100px
      height: '70px', // 51px
      description: 
        '<p>Testing how to use personalize consults with JPQL</p>',
      links: [
        {
          name: 'See the project',
          href: 'https://github.com/VictorV4sco/desafio-consulta-vendas',
        },
      ],
    },

    {
      src: 'assets/img/projects/spring-project.png',
      alt: 'Spring Project',
      title: 'Validation & Security',
      width: '100px', // 100px
      height: '70px', // 51px
      description: 
        '<p>Testing how to use Validation and Spring Security</p>',
      links: [
        {
          name: 'See the project',
          href: 'https://github.com/VictorV4sco/validacaoEseguranca',
        },
      ],
    },

  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDiaLogPanelClass.PROJECTS
    })
  }
}
