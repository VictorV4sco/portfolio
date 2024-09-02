import { Component } from '@angular/core';

//components
import { HeaderComponent } from '../../header/header.component';
import { KnowledgeComponent } from '../../knowledge/knowledge.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowledgeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
