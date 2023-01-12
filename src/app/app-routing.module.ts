import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from "./pages/profile/profile.component";
import { TaskCdkComponent } from "./task-cdk/task-cdk.component";

const routes: Routes = [
  { path: "", redirectTo: "profile", pathMatch: "full"},
  { path: "profile", component: ProfileComponent },
  { path: "tasks", component: TaskCdkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
