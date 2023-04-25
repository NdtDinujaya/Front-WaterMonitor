import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorDataComponent } from './components/sensor-data/sensor-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/sensor-data', pathMatch: 'full' },
  { path: 'sensor-data', component: SensorDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
