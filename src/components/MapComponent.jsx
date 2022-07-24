import React, {useEffect, useRef, useState} from "react";
import {YMaps, Map, Placemark, Clusterer} from "react-yandex-maps";

const MAP_SETTINGS = {
  center: [55.751574, 37.573856],
  zoom: 10,
};

function MapComponent(props) {
  const {mapMarks} = props
  const [mapRef, setMapRef] = useState()
  const [clusterRef, setCluster] = useState()
  const [lastRenderPlacemarkRef, setLastRenderPlacemarkRef] = useState()

  useEffect(() => {
    if (!mapRef || !mapMarks?.length || !clusterRef) {
      mapRef?.balloon?.close()
      return
    }
    const firstMark = mapMarks[0]
    const allPlacemarkNodes = clusterRef.getGeoObjects()
    const firstPlacemarkNode = allPlacemarkNodes[0]
    if (!firstMark || !allPlacemarkNodes?.length || !firstPlacemarkNode || allPlacemarkNodes.length !== mapMarks.length) {
      mapRef?.balloon?.close()
      return;
    }
    const currentMarkTags = JSON.parse(firstMark.sport_type)

    mapRef.balloon.open([Number(firstMark.latitude), Number(firstMark.longitude)], PlacemarkBalloon({
      title: firstMark.name,
      tags: currentMarkTags,
      address: firstMark.address
    }))
    setTimeout(() => {
      mapRef.setCenter([Number(firstMark.latitude), Number(firstMark.longitude)], 16)
    }, 1500)
  }, [mapMarks, lastRenderPlacemarkRef, mapRef, clusterRef])

  return (
    <YMaps>
      <Map defaultState={MAP_SETTINGS} className='map' instanceRef={map => setMapRef(map)}>
        <Clusterer options={{preset: 'islands#invertedNightClusterIcons', viewportMargin: 1280}} instanceRef={ref => {
          if (ref) {
            setCluster(ref);
          }
        }}>
          {mapMarks?.length
            ? mapMarks.map((item, index) => {
              const currentMarkTags = JSON.parse(item.sport_type)

              return (
                <Placemark key={item.id}
                           properties={{
                             balloonContent: PlacemarkBalloon({
                               title: item.name,
                               tags: currentMarkTags,
                               address: item.address
                             }),
                           }}
                           options={{
                             balloonOffset: [0, -30],
                             // balloonCloseButton: false,
                             hideIconOnBalloonOpen: false,
                             iconLayout: 'default#image',
                             iconImageHref: 'img/point.svg',
                             iconImageSize: [100, 100],
                             iconImageOffset: [-50, -50],
                           }}
                           modules={
                             ['geoObject.addon.balloon']
                           }
                           instanceRef={ref => {
                             if (index === mapMarks.length - 1 && ref) {
                               setLastRenderPlacemarkRef(ref)
                             }
                           }}
                           geometry={[item.latitude, item.longitude]}
                />
              )
            })
            : ''
          }
        </Clusterer>
      </Map>
    </YMaps>
  );
}

export default MapComponent;

const PlacemarkBalloon = (props) => {
  const {title, tags, address} = props

  return ` <h3 className="ballon__title">
        ${title}
      </h3>
      <main className="ballon__tags">
        ${tags.map(tagName => `<span key={tagName}>${tagName}</span>`).join(' ')}
      </main>
      <aside className="ballon__address">
        <div>${address}</div>
      </aside>`
}