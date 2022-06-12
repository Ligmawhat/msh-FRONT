import * as React from "react"
import { Clusterer, Map, Placemark, YMaps } from "react-yandex-maps"

type places = {
  latitude: number
  longitude: number
}

const allPlaces: places[] = [
  {
    latitude: 50.5,
    longitude: 43,
  },
  {
    latitude: 50.55,
    longitude: 43,
  },
  {
    latitude: 50.6,
    longitude: 43,
  },
  {
    latitude: 50.65,
    longitude: 43,
  },
  {
    latitude: 50.7,
    longitude: 43,
  },
]

const EventsMap: React.FC = () => {
  return (
    <YMaps
      query={{
        apikey: "e3dfdf8f-4bd1-4210-91d2-253e5046ac23",
      }}
      version={"2.1"}
    >
      <Map
        style={{ width: "100%", height: "100%" }}
        defaultState={{
          center: [55.75, 37.57],
          zoom: 9,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        <Clusterer>
          {allPlaces.map(({ longitude, latitude }, index) => {
            return (
              <Placemark
                key={index}
                defaultGeometry={[latitude, longitude]}
                onClick={() => alert(index)}
              />
            )
          })}
        </Clusterer>
      </Map>
    </YMaps>
  )
}

export default EventsMap
