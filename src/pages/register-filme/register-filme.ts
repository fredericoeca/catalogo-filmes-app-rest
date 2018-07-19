import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-register-filme',
  templateUrl: 'register-filme.html',
})
export class RegisterFilmePage {

  public registerForm: FormGroup;
  public paises: any;
  public idiomas: any;
  public distribuidores: any;
  public generos: any;
  public loading: any;
  public res: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadindCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthProvider
  ) {
    this.registerForm = this.createRegisterForm();

    this.authService.getPais().subscribe( data => {
      this.paises = data;
      console.log(this.paises);
    })
    this.authService.getDistribuidores().subscribe( data => {
      this.distribuidores = data;
      console.log(this.distribuidores);
    })
    this.authService.getIdiomas().subscribe( data => {
      this.idiomas = data;
      console.log(this.idiomas);
    })
    this.authService.getGeneros().subscribe( data => {
      this.generos = data;
      console.log(this.generos);
    })
  }

  createRegisterForm(){
    return this.formBuilder.group({
      filme: ['',Validators.required],
      tituloOriginal: [''],
      lancamento: ['', Validators.required],
      pais: ['', Validators.required],
      idioma: ['', Validators.required],
      distribuidor: ['', Validators.required],
      genero: ['', Validators.required],
      sinopse: ['', Validators.required],
      duracao: ['', Validators.required]
    })
  }

  save(){
    let { filme, tituloOriginal, lancamento, pais, idioma, distribuidor, genero, sinopse, duracao } = this.registerForm.value;
    let f = {
      'fil_nome': filme,
      'fil_titulo_original': tituloOriginal,
      'fil_lancamento': lancamento,
      'fil_pais': pais,
      'fil_idioma': idioma,
      'fil_distribuidor': distribuidor,
      'fil_genero': genero,
      'fil_sinopse': sinopse,
      'fil_duracao': duracao,
      'fil_visto': 0,
      'fil_media': 0
    };
  }

}
