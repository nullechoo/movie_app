import React from 'react';
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="container__bar">
      <div><h4>Каталог сериалов <a target="_blank" href="https://kinopoisk.dev/">КиноПоиск API</a></h4></div>



      <div className="container__end">
        <p>
          Проект разработан в рамках изучения React,
          используется Axios для получения данных по API и роуты для реализации страниц.
        </p>
      </div>

      <div className="container__svg">
        <a href="https://www.kinopoisk.ru/">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 202 202" fill="none">
            <rect x="0.5" y="0.5" width="201" height="201" fill="black" />
            <path d="M161 41L72.5771 88.3297L118.657 41H93.1143L61.7429 84.5446V41H41V161H61.7429V117.526L93.1143 161H118.657L73.7737 115.158L161 161V138.714L81.4434 106.798L161 112.143V89.8571L81.9474 94.9966L161 63.2857V41Z" fill="url(#paint0_radial_4902_369)" />
            <rect x="0.5" y="0.5" width="201" height="201" stroke="#fff" />
            <defs>
              <radialGradient id="paint0_radial_4902_369" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(41 41) rotate(45) scale(169.706)">
                <stop offset="0.5" stopColor="#FF5500" />
                <stop offset="1" stopColor="#BBFF00" />
              </radialGradient>
            </defs>
          </svg>
        </a>
      </div>

    </div>
  )
}

export default About;