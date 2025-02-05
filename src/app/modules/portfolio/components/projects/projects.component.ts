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
      width: '200px', // 100px
      height: '101px', // 51px
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
      width: '200px', // 100px
      height: '101px', // 51px
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
      title: 'VBflix',
      width: '200px', // 100px
      height: '101px', // 51px
      description: 
        '<p>API project based on Netflix</p>',
      links: [
        {
          name: 'See the project',
          href: 'https://github.com/VictorV4sco/vbflix',
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
