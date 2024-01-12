import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './shared/home/home.component';
import { BindingComponent } from './demo/binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeComponent } from './demo/pipe/pipe.component';
import { DirectiveComponent } from './demo/directive/directive.component';
import { ChildComponent } from './demo/inputOutput/child/child.component';
import { ParentComponent } from './demo/inputOutput/parent/parent.component';
import { FormulaireComponent } from './demo/formulaire/formulaire.component';
import { ServiceComponent } from './demo/service/service.component';
import { RoutingComponent } from './demo/routing/routing.component';
import { ActivatedRouteComponent } from './demo/activated-route/activated-route.component';
import { FakeLoginComponent } from './demo/fake-login/fake-login.component';
import { GuardComponent } from './demo/guard/guard.component';
import { ConsoApiComponent } from './demo/conso-api/conso-api.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BindingComponent,
    PipeComponent,
    DirectiveComponent,
    ChildComponent,
    ParentComponent,
    FormulaireComponent,
    ServiceComponent,
    RoutingComponent,
    ActivatedRouteComponent,
    FakeLoginComponent,
    GuardComponent,
    ConsoApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
