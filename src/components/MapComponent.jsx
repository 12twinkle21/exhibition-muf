import React from "react";
import {YMaps, Map, Placemark, Clusterer} from "react-yandex-maps";

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
          {mapMarks?.length && mapMarks.map((item) => {
            const currentMarkTags = JSON.parse(item.sport_type)
            console.log(item)
            return (
              <Placemark key={item.id}
                         properties={{
                           balloonContent: PlacemarkBalloon({title: item.name, tags: currentMarkTags, address: '123'}),
                         }}
                         options={{
                           balloonOffset: [0, -30],
                           balloonCloseButton: false,
                           hideIconOnBalloonOpen: false,
                         }}
                         modules={
                           ['geoObject.addon.balloon']
                         }
                         geometry={[item.latitude, item.longitude]}
              />
            )
          })
          }
        </Clusterer>
      </Map>
    </YMaps>
  );
}

export default MapComponent;

const PlacemarkBalloon = (props) => {
  const {title, tags, address} = props
  console.log(tags)
  return ` <h3 className="ballon__title">
        ${title}
      </h3>
      <main className="ballon__tags" onClick="console.log(0)">
        ${tags.map(tagName => `<span key={tagName}>${tagName}</span>`).join(' ')}
      </main>
      <aside className="ballon__address">
        <div>Автозаводская ул., 23А</div>
      </aside>`
}