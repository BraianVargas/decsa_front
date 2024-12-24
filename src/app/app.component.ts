import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from '../public/dashboard/base/base.component';
import { LoginComponent } from '../public';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BaseComponent, LoginComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'decsa_front';
}
