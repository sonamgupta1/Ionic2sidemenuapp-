import {Page, NavController} from 'ionic/ionic';

import "./survey.scss";



@Page({
    templateUrl: 'app/survey/survey.html'
})


export class SurveyPage {
    constructor(nav: NavController) {
        this.nav = nav;
    }

    next_page(page)
    {

        console.log("click successful");


    }
}
