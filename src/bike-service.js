export class BikeService { 
  async getStolenBikes() {
    try {
      let response = await fetch (`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=75.164.204.162&distance=10&stolenness=stolen`);
      let jsonifiedResponse;
      if(response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}