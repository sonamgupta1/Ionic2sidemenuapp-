import {Page, NavController} from 'ionic/ionic';


import "./login.scss";



@Page({
    templateUrl: 'app/login/login.html'
})


export class LoginPage {
    constructor(nav: NavController) {
        this.nav = nav;
    }


}

