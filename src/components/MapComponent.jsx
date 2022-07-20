import React from "react";
import { YMaps, Map, Placemark, Clusterer } from "react-yandex-maps";

const MAP_SETTINGS = {
  center: [55.751574, 37.573856],
  zoom: 10,
};

function MapComponent(props) {
  const {mapMarks} = props

  return (
    <YMaps>
    <Map defaultState={MAP_SETTINGS} className='map'>
      <Clusterer>
       {mapMarks?.length && mapMarks.map((item) => <Placemark key={item.id} geometry={[item.latitude, item.longitude]} />)}
      </Clusterer>
    </Map>
  </YMaps>
  );
}

export default MapComponent;
