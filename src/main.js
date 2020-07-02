import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BikeService } from './bike-service.js';
// import { Bike } from './../src/bike.js';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
      const zip = $("#userZip").val();
      $('#location').val("");
  
    (async () => {
      let bikeService = new BikeService();
      const response = await bikeService.getStolenBikes(zip);
      getElements(response);
    })();

    function getElements(responseParam) {
      if (responseParam) {
        $('#output-para').text(responseParam.bikes[0].date_stolen);
      } else {
        $('#output-para').text('In space, no one can hear your response');
      }
    }
  });
});