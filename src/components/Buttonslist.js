import React from 'react';
import "../style/Buttonlist.css"
const arr = [
  'Computer', 'Anime','Sports', 'Education', 'News', 'Music', 'Manga', 'Marvel', 'Comic', 'Shonen', 'RomCom', 'Isekai', 'Slice of Life',
  'Thirller', 'South Indian','Bollywood','Computer', 'Anime','Sports', 'Education', 'News', 'Music', 'Manga', 'Marvel', 'Comic', 'Shonen', 'RomCom', 'Isekai', 'Slice of Life',
  'Thirller',
];

const Buttonslist = () => {
  const buttons = Array.from({ length: arr.length }, (_, index) => (
    <button key={index}>{arr[index]}</button>
  ));

  return (
    <div className="button-list">
      {buttons}
    </div>
  );
};

export default Buttonslist;
