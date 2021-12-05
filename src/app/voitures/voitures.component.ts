import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voitures';
import { VoitureService } from '../services/voiture.service';
import { Router } from '@angular/router';
import { MarqueService } from '../services/marque.service';
import { Marque } from '../model/marque';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css'],
})
export class VoituresComponent implements OnInit {
  voitures!: Voiture[];
  marques!: Marque[];
  constructor(
    private voitureService: VoitureService,
    private marqueService: MarqueService,
    private router: Router
  ) {}
  supprimerVoiture(v: Voiture) {
    /*
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.voitureService.supprimerVoiture(voit);
      */
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.voitureService.supprimerVoiture(v.idVoiture).subscribe(() => {
        console.log('voiture supprimé');
        this.SuprimerVoitureDuTableau(v);
      });
  }
  SuprimerVoitureDuTableau(voit: Voiture) {
    this.voitures.forEach((cur, index) => {
      if (voit.idVoiture === cur.idVoiture) {
        this.voitures.splice(index, 1);
      }
    });
  }
  ngOnInit(): void {
    this.voitureService.listeVoitures().subscribe((voits) => {
      console.log(voits);
      this.voitures = voits;
    });
  }
}
