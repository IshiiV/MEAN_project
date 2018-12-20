import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	isLogged = false;
	token = '';

	constructor(
		private Http: Http
	) { 
	}

	login(user, callback){
		this.Http.post('http://localhost:3000/cursos/login', user)
			.subscribe(response => {
				if(response.json().message === 'ok'){
					this.isLogged = true;
					this.token = response.json().token;
				}else{
					this.isLogged = false;
				}
				callback(this.isLogged);
			})
	}
}
