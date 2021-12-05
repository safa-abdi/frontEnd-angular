import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoituresComponent } from './voitures/voitures.component';
import { MarquesComponent } from './marques/marques.component';
import { AddVoituresComponent } from './add-voitures/add-voitures.component';
import { AddMarqueComponent } from './add-marque/add-marque.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: 'voitures', component: VoituresComponent },
  { path: 'marques', component: MarquesComponent },
  { path: 'add-voitures', component: AddVoituresComponent },
  { path: 'add-marques', component: AddMarqueComponent },
  { path: '', redirectTo: 'voitures', pathMatch: 'full' },
  { path: 'updateVoiture/:id', component: UpdateVoitureComponent },
  { path: 'updateMarque/:id', component: UpdateMarqueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
