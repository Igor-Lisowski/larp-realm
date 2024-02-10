import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './layout/menu/menu.component';
import { NavigationBarComponent } from './layout/navigation-bar/navigation-bar.component';

@Component({
  standalone: true,
  imports: [IonicModule, MenuComponent, NavigationBarComponent],
  selector: 'larp-realm-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ui';
}
