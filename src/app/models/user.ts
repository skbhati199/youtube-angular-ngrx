export interface User {
  id:number;
  name:string;
  email:string;
  address:Address;
  username:string;
}

export interface Address {
  street:string;
  suite:string;
  'city':string;
  'zipcode':string;
  geo:Geo;
}

interface Geo {
  'lat':string;
  'lng':string;
}
