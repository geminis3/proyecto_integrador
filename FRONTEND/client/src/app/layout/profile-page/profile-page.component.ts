import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  
  user: any = {};
  correo: string = '';
  password_confirm: string = '';
  new_password: string = '';
  password_min_length: number = 8;
  password_caracteres_numericos: boolean = true;
  password_caracteres_especiales: boolean = true;
  password_caracteres_mayusculas: boolean = true;
  password_caracteres_minusculas: boolean = true;
  
  errores: any[] = [];
  
  constructor(private userDataService: UserService, private router: Router, private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.reset();
    this.correo = this.user.email;
  }
  
  reset() {
    this.password_confirm = '';
    this.new_password = '';
    this.user = JSON.parse(sessionStorage.getItem('user') as string);
  }
  
  validate_email(): boolean {
    this.errores = [];
    if (this.user.email == '') {
      this.errores.push( { title: 'Correo Electrónico Incorrecto', message: 'Debe ingresar un Correo Electrónico'} );
      return false;
    }
    const isOk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email.toString());
    if (!isOk) {
      this.errores.push( { title: 'Correo Electrónico Incorrecto', message: 'Correo Electrónico no válido.'} );
    }
    return isOk;
  }
  
  validate_password(): boolean {
    if(this.new_password != this.password_confirm){
      this.errores.push( { title: 'Contraseña Incorrecta', message: 'Las contraseñas no coinciden.'} );
      return false;
    }
    else {
      return true;
    }
  }
  
  save_profile() {
    try {
      this.validate_email();
      this.validate_password();
      if (this.errores.length > 0) {
        this.errores.forEach((error: any) => {
          this.toastr.error(error.message, error.title);
        });
        return;
      }
      if(this.new_password != ''){
        this.userDataService.change_password(this.user.id, this.new_password);
      }
      this.userDataService.update(this.user.id, this.user.name, this.user.email);
      this.toastr.success('Por favor inicie sesión nuevamente.', 'Perfil Actualizado');
      sessionStorage.clear();
      this.router.navigate(['/login']);
    } catch (e: any) {
      this.toastr.error(e.error.error, 'Error');
    }
  }
}
