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
        $('#output-para').append("<br><img src='" + responseParam.bikes[0].thumb + "'><br>")
        $('#output-para').append("Date Stolen: " + responseParam.bikes[0].date_stolen + "<br>");
        $('#output-para').append("Year: " + responseParam.bikes[0].year + "<br>");
        $('#output-para').append("Manufacturer: " + responseParam.bikes[0].manufacturer_name + "<br>");
        $('#output-para').append("Model " + responseParam.bikes[0].frame_model + "<br>");
        $('#output-para').append("Frame Color: " + responseParam.bikes[0].frame_colors + "<br>");
      } else {
        $('#output-para').text('In space, no one can hear your response');
      }
    }
  });
});