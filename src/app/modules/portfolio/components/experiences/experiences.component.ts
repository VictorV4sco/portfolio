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
        strong: "Freelance Web Developer",
        p: "April/2025 to present"
      },
      text: `
        <ul>
          <li> - Working on web application development focused on back-end using Spring Boot and integration with front-end in Next.js;</li>
          <br/>
          <li> - Development of RESTful APIs following best practices and clean architecture;</li>
          <br/>
          <li> - Use of JPA/Hibernate for ORM and validation with Bean Validation;</li>
          <br/>
          <li> - Global exception handling with @ControllerAdvice;</li>
          <br/>
          <li> - Implementation of authentication and authorization with Spring Security and JWT;</li>
          <br/>
          <li> - Spring Security</li>
          <br/>
          <li> - Endpoint documentation with Swagger/OpenAPI;</li>
          <br/>
          <li> - Writing unit tests with JUnit and Mockito;</li>
          <br/>
          <li> - Use of Git, Docker, and AWS for version control and development environment;</li>
        </ul>
      `
    }
  ])
}
