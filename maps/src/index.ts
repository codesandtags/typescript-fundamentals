import { Company } from "./Company";
import { User } from "./User";
import { CustomMap } from "./CustomMap";

function initApp() {
  const customMap = new CustomMap("map");

  // Add companies
  for (let i = 0; i < 10; i++) {
    customMap.addMarker(new Company());
  }

  // Add users
  for (let i = 0; i < 15; i++) {
    customMap.addMarker(new User());
  }
}

initApp();
