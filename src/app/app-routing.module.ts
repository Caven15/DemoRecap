import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { BindingComponent } from './demo/binding/binding.component';
import { PipeComponent } from './demo/pipe/pipe.component';
import { DirectiveComponent } from './demo/directive/directive.component';
import { ParentComponent } from './demo/inputOutput/parent/parent.component';
import { FormulaireComponent } from './demo/formulaire/formulaire.component';
import { ServiceComponent } from './demo/service/service.component';
import { RoutingComponent } from './demo/routing/routing.component';
import { ActivatedRouteComponent } from './demo/activated-route/activated-route.component';
import { FakeLoginComponent } from './demo/fake-login/fake-login.component';
import { GuardComponent } from './demo/guard/guard.component';
import { AuthGuard } from './auth.guard';
import { ConsoApiComponent } from './demo/conso-api/conso-api.component';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'binding', component : BindingComponent},
  {path : 'pipe', component : PipeComponent},
  {path : 'directive', component : DirectiveComponent},
  {path : 'inputOutput', component : ParentComponent},
  {path : 'formulaire', component : FormulaireComponent},
  {path : 'service', component : ServiceComponent},
  {path : 'routing', component : RoutingComponent},
  {path : 'activatedRoute/:id', component : ActivatedRouteComponent},
  {path : 'fakeLogin', component : FakeLoginComponent},
  {path : 'guard', canActivate : [AuthGuard] , component : GuardComponent},
  {path : 'consoApi',  component : ConsoApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
