import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  name: string ;
  image: string ;
  episode: any[];
  species: string ;
  status: string ;
}
