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
      src: 'assets/img/projects/backend.png',
      alt: 'Spring Project',
      title: 'Consult',
      width: '200px', // 100px
      height: '99px', // 51px
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
      src: 'assets/img/projects/backend.png',
      alt: 'Spring Project',
      title: 'Validation & Security',
      width: '200px', // 100px
      height: '99px', // 51px
      description: 
        '<p>Testing how to use Validation and Spring Security</p>',
      links: [
        {
          name: 'See the project',
          href: 'https://github.com/VictorV4sco/validacaoEseguranca',
        },
      ],
    },

    {
      src: 'assets/img/projects/fullstack.png',
      alt: 'Full-stack Project',
      title: 'College project',
      width: '200px', // 100px
      height: '99px', // 51px
      description: 
        '<p>College project of a championship</p>',
      links: [
        {
          name: 'See the project',
          href: 'https://github.com/VictorV4sco/campeonato',
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
