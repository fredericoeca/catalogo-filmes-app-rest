import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-filme',
  templateUrl: 'filme.html',
})
export class FilmePage {

  public filme: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.filme = {
      'filme': this.navParams.get('fil_nome'),
      'tituloOriginal': this.navParams.get('fil_titulo_original'),
      'lancamento': this.navParams.get('fil_lancamento'),
      'paisNome': this.navParams.get('pai_nome'),
      'paisSigla': this.navParams.get('pai_sigla'),
      'idioma': this.navParams.get('idi_nome'), 
      'idiomaSigla': this.navParams.get('idi_sigla'),
      'distribuidor': this.navParams.get('dis_nome'),
      'genero': this.navParams.get('gen_nome'),
      'sinopse': this.navParams.get('fil_sinopse'),
      'duracao': this.navParams.get('fil_duracao'),
      'visto': this.navParams.get('fil_visto'),
      'media': this.navParams.get('fil_media'),
      'cartaz': this.navParams.get('fil_cartaz'),
    }
  }

}
