/**
 * Имеется список станций
 * Каждая станция покрывает определенный набор штатов, эти наборы перекрываются.
 *
 * Найти минимальный набор станций, который покрывал бы все штаты
 */

let states_need = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = new Map();
stations.set("kone", new Set(["id", "nv", "ut"]));
stations.set("ktwo", new Set(["wa", "id", "mt"]));
stations.set("kthree", new Set(["or", "nv", "ca"]));
stations.set("kfour", new Set(["nv", "ut"]));
stations.set("kfive", new Set(["ca", "az"]));

const stations_final = new Set();

while (states_need.size) {
  let states_covered = new Set();
  let bestStation = new Set();

  for (const [station, states_station] of stations) {
   
    const covered = states_need.intersection(states_station);
    if (covered.size > states_covered.size) {
      bestStation = stations.get(station);
      states_covered = covered;
       stations_final.add(station);
    }
  }
  states_need = states_need.difference(bestStation);
}


console.log(stations_final)
