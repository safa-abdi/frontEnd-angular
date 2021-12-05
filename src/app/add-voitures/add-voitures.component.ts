import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voitures';
import { VoitureService } from '../services/voiture.service';
import { Router } from '@angular/router';
import { MarqueService } from '../services/marque.service';

@Component({
  selector: 'app-add-voitures',
  templateUrl: './add-voitures.component.html',
  styleUrls: ['./add-voitures.component.css'],
})
export class AddVoituresComponent implements OnInit {
  voitures!: Voiture[];
  newVoiture = new Voiture();
  message!: string;
  marques: any;
  constructor(
    private voitureService: VoitureService,
    private marqueService: MarqueService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.marqueService.listeMarques().subscribe((mqs: any) => {
      console.log(mqs);
      this.marques = mqs;
    });
  }
  addVoiture() {
    /*
    this.voitureService.ajouterVoiture(this.newVoiture);
    this.message =
      'Voiture ' + this.newVoiture.designation + ' Ajoutée avec succés';
      */
    this.voitureService.ajouterVoiture(this.newVoiture).subscribe((voit) => {
      console.log(voit);
    });
    this.router.navigate(['voitures']);
  }
}
