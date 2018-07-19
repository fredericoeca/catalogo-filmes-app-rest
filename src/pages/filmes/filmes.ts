import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FilmesProvider } from '../../providers/filmes/filmes';
import { FilmePage } from '../filme/filme';

@IonicPage()
@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
})
export class FilmesPage {

  public filmes: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public filmesService: FilmesProvider
  ) {
    /*this.storage.get('filmes')
      .then( val => {
        this.filmes = val;
      })*/

    this.filmesService.getFilmes()
    .subscribe( data => {
      this.filmes = data;
      console.log(this.filmes);
    })
  }

  goToFilme(f){
    this.navCtrl.push(FilmePage, {
      'fil_nome': f.fil_nome,
      'fil_titulo_original': f.fil_titulo_original,
      'fil_lancamento': f.fil_lancamento,
      'pai_nome': f.pai_nome,
      'pai_sigla': f.pai_sigla,
      'idi_nome': f.idi_nome,
      'idi_sigla': f.idi_sigla,
      'dis_nome': f.dis_nome,
      'gen_nome': f.gen_nome,
      'fil_sinopse': f.fil_sinopse,
      'fil_duracao': f.fil_duracao,
      'fil_visto': f.fil_visto,
      'fil_media': f.fil_media,
      'fil_cartaz': f.fil_cartaz
    })
  }

}
