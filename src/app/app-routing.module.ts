import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DirectivesComponentComponent } from './components/directives-component/directives-component.component';
import { EmitComponent } from './components/emit/emit.component';

const routes: Routes = [
  {path: 'emite', component: EmitComponent},
  {path: 'diretiva', component: DirectivesComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
