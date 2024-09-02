import { Component, signal } from '@angular/core';

//interface
import { IExperiences } from '../interface/experiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "",
        p: ""
      },
      text: ""
    }
  ])
}
