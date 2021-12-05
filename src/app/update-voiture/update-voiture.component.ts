import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoitureService } from '../services/voiture.service';
import { Voiture } from '../model/voitures';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styles: [],
})
export class UpdateVoitureComponent implements OnInit {
  currentVoiture = new Voiture();

  constructor(
    private activatedRoute: ActivatedRoute,
    private voitureService: VoitureService,
    private router: Router
  ) {}
  ngOnInit() {
    /*
    this.currentVoiture = this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params.id);
    console.log(this.consulterVoiture);
    */
    this.voitureService
      .consulterVoiture(this.activatedRoute.snapshot.params['id'])
      .subscribe((voit) => {
        this.currentVoiture = voit;
      });
  }
  updateVoiture() {
    this.voitureService.updateVoiture(this.currentVoiture).subscribe(
      () => {
        this.router.navigate(['voitures']);
      },
      (error) => {
        alert('Problème lors de la modification !');
      }
    );
  }
}
