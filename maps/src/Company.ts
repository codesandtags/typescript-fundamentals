import { faker } from "@faker-js/faker";
import { Mappeable } from "./CustomMap";

export class Company implements Mappeable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<div class="custom-marker">
      <h2>${this.companyName}</h2>
      <p>${this.catchPhrase}</p>
    </div>`;
  }
}
