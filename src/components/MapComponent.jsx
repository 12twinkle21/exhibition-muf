import React, {useEffect, useMemo, useRef, useState} from "react";
import {YMaps, Map, Placemark, Clusterer, ObjectManager} from "react-yandex-maps";
import {ALL_OBJECTS_JSON} from "../pages/Main/dataFromServer";

const defaultX = 55.4
const defaultY = 37.573856
const defaultZoom = 9
const MAP_SETTINGS = {
  center: [defaultX, defaultY],
  zoom: defaultZoom,
};

function MapComponent(props) {
  const {mapMarks, activeRecomendCard} = props
  const [allObjects, setAllObjects] = useState(ALL_OBJECTS_JSON)
  const [mapRef, setMapRef] = useState()
  
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

  useEffect(() => {
    if (!mapRef || !allObjects?.length || !activeRecomendCard) {
      mapRef?.balloon?.close()
      setTimeout(() => {
        mapRef?.balloon.close()
        mapRef?.setCenter([defaultX, defaultY], defaultZoom)
      }, 0)
      return
    }
    const firstMark = allObjects.find(placemark => placemark.id === activeRecomendCard)
    if (!firstMark) {
      mapRef?.balloon?.close()
      return;
    }
    const currentMarkTags = JSON.parse(firstMark.sport_type)

    setTimeout(() => {
      mapRef?.balloon.open([Number(firstMark.latitude), Number(firstMark.longitude)], PlacemarkBalloon({
        title: firstMark.name,
        tags: currentMarkTags,
        address: firstMark.address
      }))
    }, 500)
    setTimeout(() => {
      mapRef?.setCenter([Number(firstMark.latitude), Number(firstMark.longitude)], 18)
    }, 500)
  }, [activeRecomendCard, mapRef])

  useEffect(() => {
    setTimeout(() => {
      mapRef?.balloon.close()
      mapRef?.setCenter([55.751574, 37.573856], 10)
    }, 0)
  }, [mapMarks])
  return (
    <YMaps>
      <Map defaultState={MAP_SETTINGS} className='map' instanceRef={map => setMapRef(map)}>
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