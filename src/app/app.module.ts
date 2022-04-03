import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// Angular Material
import { MatSliderModule }  from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule }    from '@angular/material/icon';
import { MatButtonModule }  from '@angular/material/button';
import { MatListModule }    from '@angular/material/list';

// Pages
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

// Services
import { MessageService } from 'src/services/message.service';

// Components
import { MenuButtonComponent } from '../components/menu-button/menu-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
