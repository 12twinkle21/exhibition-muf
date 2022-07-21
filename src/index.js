import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './i18n';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


// const recommendedDetailUrls = [
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/1',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/2',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/3',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/4',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/5',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/6',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/7',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/8',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/9',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/10',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/11',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/12',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/13',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/14',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/15',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/16',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/17',
//   'https://exhibition-muf-maps.truemachine.space/api/objects/recommended/18'
// ]

// axios.all(recommendedDetailUrls.map((endpoint) => axios.get(endpoint))).then(
//   (resp) => {
//     const recommendedDetailPersons = resp.data.data;
//     setRecommendedDetail(recommendedDetailPersons);
//   });