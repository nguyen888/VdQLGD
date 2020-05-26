import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms';
import { routingComponent, AppRoutingModule } from './app-routing.module';
import { LoginService } from './services/login.service';
import { CheckLoginGuard } from './guards/check-login.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  
  declarations: [
    AppComponent,  
    routingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    
    MatTreeModule,
    MatIconModule, 
    MatButtonModule,

    

   ],
  providers: [LoginService,CheckLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
