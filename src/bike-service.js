export class BikeService { 
  async getStolenBikes() {
    try {
      let response = await fetch (`https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=%22Portland%2C%20Oregon%22&distance=10&stolenness=proximity`);
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