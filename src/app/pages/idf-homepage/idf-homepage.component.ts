import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HomeComponent } from "../../components/home/home.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-idf-homepage',
  imports: [HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './idf-homepage.component.html',
  styleUrl: './idf-homepage.component.scss'
})
export class IdfHomepageComponent {

}
