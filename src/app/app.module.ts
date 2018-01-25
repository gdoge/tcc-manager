import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatFormFieldModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { TrainingsModule } from './trainings/trainings.module';
import { RouterModule } from '@angular/router'
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing:true}),
    MatButtonModule, MatCheckboxModule, MatListModule, MatFormFieldModule, MatInputModule,
    TrainingsModule,    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
