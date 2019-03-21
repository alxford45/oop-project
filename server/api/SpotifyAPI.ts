import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

abstract class SpotifyAPI extends RESTDataSource {
  token: string;

  constructor() {
    super();
    this.baseURL = "https://api.spotify.com/v1/";
    //token must be regenrated @ https://developer.spotify.com/console/get-artist/
    //copy and paste new generated token into token variable below
    //MUST INCLUDE: "Bearer" before token.
    //EXAMPLE: this.token = "Bearer BASD4Dkdkk7545dsfSDf778..."
    this.token =
      "Bearer BQC1Pq7Dos5QWCK9EeLcDmJmuJCHWNSG8LZCDIFIKw1CFU1ScrO7GH6FEnw-07J4cqdteOp5WFsV1sbdnNnZLf52t1vJmtQiWzhog9cSmgG3wiLin9EuE279eGWVcgQOgfdtyF1sMsg";
  }
  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.token);
  }
  //ideal version: this.get(`artist/${id}) but RESTDataSource.get(...) was not parsing variable as string
  //current version: 0TnOYISbd1XYRBk9myaseg = ID for Pitbull on spotify
}

export default SpotifyAPI;
