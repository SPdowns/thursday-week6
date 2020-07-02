import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BikeService } from './../src/bike-service.js'

$(document).ready(function () {
  (async () => {
    let bikeService = new BikeService();
    const response = await bikeService.getStolenBikes();
    getElements(response);
  })();
  function getElements(response) {
    if (response) {
      $('#output-para').text(response.bikes[0].date_stolen)
    } else {
      $('#output-para').text('In space, no one can hear your response')
    }
  }
});