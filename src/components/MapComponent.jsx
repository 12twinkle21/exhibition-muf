import React, {useEffect, useMemo, useRef, useState} from "react";
import {YMaps, Map, Placemark, Clusterer, ObjectManager} from "react-yandex-maps";
import {ALL_OBJECTS_JSON} from "../pages/Main/dataFromServer";

const MAP_SETTINGS = {
  center: [55.751574, 37.573856],
  zoom: 10,
};

function MapComponent(props) {
  const {mapMarks} = props
  const [allObjects, setAllObjects] = useState(ALL_OBJECTS_JSON)

  const features = useMemo(() => {
    return allObjects.map(item => {
      const currentMarkTags = JSON.parse(item.sport_type)

      return {
        type: "Feature",
        id: item.id,
        geometry: {
          type: "Point",
          coordinates: [item.latitude, item.longitude]
        },
        properties: {
          balloonContent: PlacemarkBalloon({
            title: item.name,
            tags: currentMarkTags,
            address: item.address
          }),
        },
        options: {
          id: item.id,
          balloonOffset: [0, -30],
          hideIconOnBalloonOpen: false,
          iconLayout: 'default#image',
          iconImageHref: 'img/point.svg',
          iconImageSize: [100, 100],
          iconImageOffset: [-50, -50],
        },
        modules: ['geoObject.addon.balloon']
      }
    });
  }, [allObjects])

  return (
    <YMaps>
      <Map defaultState={MAP_SETTINGS} className='map'>
        <ObjectManager
          options={{clusterize: true, gridSize: 256}}
          objects={{openBalloonOnClick: true, preset:'islands#greenDotIcon'}}
          clusters={{preset: 'islands#invertedNightClusterIcons', viewportMargin: 1280, gridSize: 256}}
          defaultFeatures={features}
          filter={object => {
            return typeof mapMarks[object.options.id] !== 'undefined'
          }}
          modules={['objectManager.addon.objectsBalloon', 'objectManager.addon.objectsHint']}>
        </ObjectManager>
      </Map>
    </YMaps>
  );
}

export default MapComponent;

const PlacemarkBalloon = (props) => {
  const {title, tags, address} = props

  return ` 
    <nav>
 <h3>
        ${title}
      </h3>
      <main>
        <div>
            ${tags.map(tagName => `<span key={tagName}>${tagName}</span>`).join(' ')}
        </div>
      </main>
      <aside>
        <div>${address}</div>
      </aside>
</nav>
`
}