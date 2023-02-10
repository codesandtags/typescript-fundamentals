import { faker } from "@faker-js/faker";
import { Mappeable } from "./CustomMap";

export class User implements Mappeable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<div class="custom-marker">
      <h2>${this.name}</h2>
      <p>I want to travel the world with Churrita ❤️‍🔥 🛩 🌎</p>
    </div>`;
  }
}
