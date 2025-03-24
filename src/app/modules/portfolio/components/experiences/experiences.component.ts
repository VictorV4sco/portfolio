import { Component, signal } from '@angular/core';

//interface
import { IExperiences } from '../interface/IExperiences.interface';

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
        strong: "Back-End",
        p: "Java"
      },
      text: `
      Possuo conhecimento em:
      <ul>
        <li> - Spring Boot</li>
        <li> - Hibernate</li>
        <li> - JPA</li>
        <li> - JPQL</li>
        <li> - Spring Security</li>
        <li> - Validations</li>
        <li> - Microservices</li>
        <li> - REST APIs</li>
        <li> - MySQL</li>
        <li> - JUnit</li>
        <li> - Mockito</li>
      </ul>
    `
    }
  ])
}
