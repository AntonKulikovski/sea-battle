import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { appRoutes } from './router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    LoginModule,
  ],
  declarations: [
    AppComponent,
  ],  
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}