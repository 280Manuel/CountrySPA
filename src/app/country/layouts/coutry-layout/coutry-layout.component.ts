import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "../../components/top-menu/top-menu.component";

@Component({
  selector: 'app-coutry-layout',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './coutry-layout.component.html',
})
export class CoutryLayoutComponent { }
