/* Instructions to every other class on how they can be an argument to addMarker */
export interface Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
}

export class CustomMap {
  private map: google.maps.Map;

  constructor(ele: HTMLElement, zoom?: number) {
    this.map = new google.maps.Map(ele, {
      zoom: zoom | 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  public addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.map, marker);
    });
  }
}
