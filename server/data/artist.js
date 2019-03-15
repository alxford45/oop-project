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
      "Bearer BQCNKOLRvCIXXu9VqG7LU8vXzpmqzVwI4I74fUGoY9sXQvXC8ctZeHFgkBe8RvCxE91luTeU_FzrMqPa6AuE7KzKGO5Gl4IDUov1ODdIYIhhuvuEmH-oiX5uxC-NY82rmxZv8H0WJOs";
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
