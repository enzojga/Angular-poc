import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { InputComponentComponent } from './components/input-component/input-component.component';
import { DirectivesComponentComponent } from './components/directives-component/directives-component.component';
import { NgIfComponentComponent } from './components/ng-if-component/ng-if-component.component';
import { EmitComponent } from './components/emit/emit.component';
import { ChangeNameComponent } from './components/change-name/change-name.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    InputComponentComponent,
    DirectivesComponentComponent,
    NgIfComponentComponent,
    EmitComponent,
    ChangeNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
