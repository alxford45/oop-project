const { RESTDataSource } = require("apollo-datasource-rest");

class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spotify.com/v1/";
    //token must be regenrated @ https://developer.spotify.com/console/get-artist/
    //copy and paste new generated token into token variable below
    //MUST INCLUDE: "Bearer" before token.
    //EXAMPLE: this.token = "Bearer BASD4Dkdkk7545dsfSDf778..."
    this.token =
      "Bearer BQCF825eGI2T9fE4x5aOOsVloHigH8SmpBFhITlV0vlDcbvvLCslCwKYm9lHaCwEVFVOzFtMwQ0mPpbEusZS_owIsQfJ3F0-oJko5LIJZAnDsLufWUDuModJ-x7CwZqSCm7GO5fKHbM";
  }
  willSendRequest(request) {
    request.headers.set("Authorization", this.token);
  }
  //ideal version: this.get(`artist/${id}) but RESTDataSource.get(...) was not parsing variable as string
  //current version: 0TnOYISbd1XYRBk9myaseg = ID for Pitbull on spotify
  async getArtistById(id) {
    const res = await this.get(`artists/0TnOYISbd1XYRBk9myaseg`);
    return res;
  }
}

module.exports = ArtistAPI;
