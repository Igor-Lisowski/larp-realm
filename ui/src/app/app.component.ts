import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './layout/menu.component';

@Component({
  standalone: true,
  imports: [IonicModule, MenuComponent],
  selector: 'larp-realm-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ui';
}
