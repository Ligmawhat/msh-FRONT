import * as React from "react"
import { Clusterer, Map, Placemark, YMaps } from "react-yandex-maps"

type Props = {
  coordinates: any[]
}

const EventsMap: React.FC<Props> = ({ coordinates }) => {
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
          {coordinates.map(({ longitude, latitude }, index) => {
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
