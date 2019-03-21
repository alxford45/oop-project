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
      "Bearer BQAZAgqvq886JXc-sbPGAE3xXlM_2P3UfVTKNL-EF7nhU6E-f-OPTep-lJrv9UdjdtAKgcW7cC5IWzQp3JHrXll0n1wjj90O53YeIOGiR2LN51YYEO_zJp8FKXzW9ehIU3jjNsHpWZs";
  }
  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.token);
  }
}

export default SpotifyAPI;
