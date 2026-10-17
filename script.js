/* ==========================================================================
   === BLOCCO 1: DATI DELLE DESTINAZIONI E STATO DELL'APPLICAZIONE ===
   Memorizziamo i paesi disponibili con i rispettivi tassi di cambio,
   unità di misura, coordinate e posizione sul globo wireframe.
   ========================================================================== */

// Elenco delle possibili destinazioni di viaggio
const destinations = [
  {
    id: 'usa',
    country: 'Stati Uniti',
    cityTag: 'USA (NYC)',
    flag: '🇺🇸',
    currencyCode: 'USD',
    currencySymbol: '$',
    rateToEUR: 1.08, // 1 EUR = 1.08 USD
    tempUnit: '°F',
    speedUnit: 'mph',
    distUnit: 'mi',
    coords: '40.71° N, 74.00° W',
    subtitle: 'USD ($) • Fahrenheit (°F) • Miglia (mph)',
    continentsShift: 0,
    pinPos: { x: 126, y: 85, badgeX: 138, badgeY: 68, textX: 173, textY: 78 }
  },
  {
    id: 'gbr',
    country: 'Regno Unito',
    cityTag: 'GBR (LON)',
    flag: '🇬🇧',
    currencyCode: 'GBP',
    currencySymbol: '£',
    rateToEUR: 0.86, // 1 EUR = 0.86 GBP
    tempUnit: '°C',
    speedUnit: 'mph',
    distUnit: 'mi',
    coords: '51.50° N, 0.12° W',
    subtitle: 'GBP (£) • Celsius (°C) • Miglia (mph)',
    continentsShift: -55,
    pinPos: { x: 130, y: 65, badgeX: 142, badgeY: 48, textX: 177, textY: 58 }
  },
  {
    id: 'jpn',
    country: 'Giappone',
    cityTag: 'JPN (TYO)',
    flag: '🇯🇵',
    currencyCode: 'JPY',
    currencySymbol: '¥',
    rateToEUR: 162.40, // 1 EUR = 162.40 JPY
    tempUnit: '°C',
    speedUnit: 'km/h',
    distUnit: 'km',
    coords: '35.67° N, 139.65° E',
    subtitle: 'JPY (¥) • Celsius (°C) • Chilometri (km/h)',
    continentsShift: -120,
    pinPos: { x: 132, y: 88, badgeX: 144, badgeY: 71, textX: 179, textY: 81 }
  },
  {
    id: 'aus',
    country: 'Australia',
    cityTag: 'AUS (SYD)',
    flag: '🇦🇺',
    currencyCode: 'AUD',
    currencySymbol: 'A$',
    rateToEUR: 1.65, // 1 EUR = 1.65 AUD
    tempUnit: '°C',
    speedUnit: 'km/h',
    distUnit: 'km',
    coords: '33.86° S, 151.20° E',
    subtitle: 'AUD (A$) • Celsius (°C) • Chilometri (km/h)',
    continentsShift: -115,
    pinPos: { x: 125, y: 175, badgeX: 137, badgeY: 158, textX: 172, textY: 168 }
  }
];

// Elenco delle possibili origini (partenza)
const origins = [
  { id: 'ita', label: '🇮🇹 IT (€)', currencyCode: 'EUR', currencySymbol: '€', tempUnit: '°C', speedUnit: 'km/h', distUnit: 'km', rateToEUR: 1.0 },
  { id: 'usa', label: '🇺🇸 USA ($)', currencyCode: 'USD', currencySymbol: '$', tempUnit: '°F', speedUnit: 'mph', distUnit: 'mi', rateToEUR: 1.08 },
  { id: 'gbr', label: '🇬🇧 UK (£)', currencyCode: 'GBP', currencySymbol: '£', tempUnit: '°C', speedUnit: 'mph', distUnit: 'mi', rateToEUR: 0.86 },
  { id: 'jpn', label: '🇯🇵 GPN (¥)', currencyCode: 'JPY', currencySymbol: '¥', tempUnit: '°C', speedUnit: 'km/h', distUnit: 'km', rateToEUR: 162.40 }
];

// Variabili di stato globale
let activeDestIndex = 0;   // Default: USA (indice 0)
let activeOriginIndex = 0; // Default: Italia (indice 0)
let isSwapped = false;     // Inversione attiva o meno

/* ==========================================================================
   === BLOCCO 2: RIFERIMENTI AGLI ELEMENTI HTML (DOM SELECTORS) ===
   ========================================================================== */
const originBtn = document.querySelector('#origin-btn');
const originBtnText = document.querySelector('#origin-btn-text');
const originDropdown = document.querySelector('#origin-dropdown');
const coordsText = document.querySelector('#coords-text');

const globeArea = document.querySelector('#globe-interactive-area');
const globeContinentsGroup = document.querySelector('#globe-continents-group');
const globeBadgeText = document.querySelector('#globe-badge-text');
const globePinTarget = document.querySelector('#globe-pin-target');

const destCard = document.querySelector('#destination-card');
const destCountryName = document.querySelector('#dest-country-name');
const destUnitsSummary = document.querySelector('#dest-units-summary');
const swapBtn = document.querySelector('#swap-btn');

const currencyIconSymbol = document.querySelector('#currency-icon-symbol');
const currencyRateFormula = document.querySelector('#currency-rate-formula');
const currencyOutputVal = document.querySelector('#currency-output-val');
const currencyInput = document.querySelector('#currency-input');
const currencyInputUnit = document.querySelector('#currency-input-unit');

const tempRateFormula = document.querySelector('#temp-rate-formula');
const tempOutputVal = document.querySelector('#temp-output-val');
const climateLabelBadge = document.querySelector('#climate-label-badge');
const tempInput = document.querySelector('#temp-input');
const tempInputUnit = document.querySelector('#temp-input-unit');

const speedRateFormula = document.querySelector('#speed-rate-formula');
const speedOutputVal = document.querySelector('#speed-output-val');
const speedInput = document.querySelector('#speed-input');
const speedInputUnit = document.querySelector('#speed-input-unit');

const destModal = document.querySelector('#dest-modal');
const destOptionsContainer = document.querySelector('#dest-options-container');

/* ==========================================================================
   === BLOCCO 3: FUNZIONI DI CALCOLO E CONVERSIONE ===
   Funzioni pure e semplici per calcolare valuta, temperatura e velocità
   ========================================================================== */

// Ritorna l'etichetta del clima in base ai gradi Celsius equivalenti
function calculateClimateBadge(celsius) {
  if (celsius < 0) return 'Gelo polare';
  if (celsius <= 12) return 'Freddo';
  if (celsius <= 20) return 'Fresco';
  if (celsius <= 27) return 'Clima mite';
  if (celsius <= 34) return 'Caldo';
  return 'Molto caldo';
}

// Calcolo e aggiornamento in tempo reale della Valuta
function updateCurrency() {
  const orig = origins[activeOriginIndex];
  const dest = destinations[activeDestIndex];
  const inputValue = parseFloat(currencyInput.value);

  // Calcola il tasso tra origine e destinazione
  let rate = dest.rateToEUR / orig.rateToEUR;
  let fromCode = orig.currencyCode;
  let toCode = dest.currencyCode;
  let outSymbol = dest.currencySymbol;

  // Se l'utente ha premuto il pulsante di inversione (Swap)
  if (isSwapped) {
    rate = 1 / rate;
    fromCode = dest.currencyCode;
    toCode = orig.currencyCode;
    outSymbol = orig.currencySymbol;
  }

  // Aggiorna etichetta della formula e unità
  currencyRateFormula.textContent = `1 ${fromCode} = ${rate < 0.01 ? rate.toFixed(4) : rate.toFixed(2)} ${toCode}`;
  currencyInputUnit.textContent = fromCode;
  currencyIconSymbol.textContent = outSymbol;

  if (isNaN(inputValue)) {
    currencyOutputVal.textContent = `${outSymbol} 0.00`;
    return;
  }

  const calculated = inputValue * rate;
  const formatted = toCode === 'JPY' ? Math.round(calculated).toLocaleString('it-IT') : calculated.toFixed(2);
  currencyOutputVal.textContent = `${outSymbol} ${formatted}`;
}

// Calcolo e aggiornamento in tempo reale della Temperatura
function updateTemperature() {
  const orig = origins[activeOriginIndex];
  const dest = destinations[activeDestIndex];
  const inputValue = parseFloat(tempInput.value);

  let fromUnit = orig.tempUnit;
  let toUnit = dest.tempUnit;

  if (isSwapped) {
    fromUnit = dest.tempUnit;
    toUnit = orig.tempUnit;
  }

  tempInputUnit.textContent = fromUnit;

  if (isNaN(inputValue)) {
    tempOutputVal.textContent = `-- ${toUnit}`;
    climateLabelBadge.textContent = 'N/D';
    return;
  }

  let celsiusValue = inputValue;
  let convertedValue = inputValue;

  // Calcola in base alle unità di partenza e arrivo
  if (fromUnit === '°C' && toUnit === '°F') {
    celsiusValue = inputValue;
    convertedValue = (inputValue * 9 / 5) + 32;
    tempRateFormula.textContent = `${inputValue}°C = ${convertedValue.toFixed(1)}°F`;
  } else if (fromUnit === '°F' && toUnit === '°C') {
    celsiusValue = (inputValue - 32) * 5 / 9;
    convertedValue = celsiusValue;
    tempRateFormula.textContent = `${inputValue}°F = ${convertedValue.toFixed(1)}°C`;
  } else {
    celsiusValue = fromUnit === '°C' ? inputValue : (inputValue - 32) * 5 / 9;
    convertedValue = inputValue;
    tempRateFormula.textContent = `${inputValue}${fromUnit} = ${convertedValue}${toUnit}`;
  }

  tempOutputVal.textContent = `${convertedValue.toFixed(1)} ${toUnit}`;
  climateLabelBadge.textContent = calculateClimateBadge(celsiusValue);
}

// Calcolo e aggiornamento in tempo reale della Velocità e Distanza
function updateSpeed() {
  const orig = origins[activeOriginIndex];
  const dest = destinations[activeDestIndex];
  const inputValue = parseFloat(speedInput.value);

  let fromSpeedUnit = orig.speedUnit;
  let toSpeedUnit = dest.speedUnit;
  let fromDistUnit = orig.distUnit;
  let toDistUnit = dest.distUnit;

  if (isSwapped) {
    fromSpeedUnit = dest.speedUnit;
    toSpeedUnit = orig.speedUnit;
    fromDistUnit = dest.distUnit;
    toDistUnit = orig.distUnit;
  }

  speedInputUnit.textContent = fromSpeedUnit;

  if (isNaN(inputValue)) {
    speedOutputVal.textContent = `0 ${toSpeedUnit}`;
    return;
  }

  let convertedValue = inputValue;

  // km/h verso mph o viceversa
  if (fromSpeedUnit === 'km/h' && toSpeedUnit === 'mph') {
    convertedValue = Math.round(inputValue * 0.621371);
    speedRateFormula.textContent = '10 km = 6.2 mi';
  } else if (fromSpeedUnit === 'mph' && toSpeedUnit === 'km/h') {
    convertedValue = Math.round(inputValue * 1.60934);
    speedRateFormula.textContent = '10 mi = 16.1 km';
  } else {
    convertedValue = Math.round(inputValue);
    speedRateFormula.textContent = `10 ${fromDistUnit} = 10 ${toDistUnit}`;
  }

  speedOutputVal.textContent = `${convertedValue} ${toSpeedUnit}`;
}

// Funzione master per ricalcolare tutte le schede
function refreshAllConversions() {
  updateCurrency();
  updateTemperature();
  updateSpeed();
}

/* ==========================================================================
   === BLOCCO 4: AGGIORNAMENTO GRAFICO DELLA DESTINAZIONE E DEL GLOBO ===
   Sposta il reticolo continentale del globo, posiziona il badge del paese
   e aggiorna i testi della scheda informativa e delle coordinate.
   ========================================================================== */

function renderCurrentDestination() {
  const dest = destinations[activeDestIndex];

  // Aggiorna coordinate geografiche
  coordsText.textContent = dest.coords;

  // Aggiorna testo del badge
  globeBadgeText.textContent = dest.cityTag;

  // Ruota/trasla i continenti sul globo
  globeContinentsGroup.style.transform = `translateX(${dest.continentsShift}px)`;

  // Posiziona il pin target sul globo
  const p = dest.pinPos;
  globePinTarget.innerHTML = `
    <circle cx="${p.x}" cy="${p.y}" r="6" class="target-ring" />
    <circle cx="${p.x}" cy="${p.y}" r="2.2" class="target-center-dot" />
    <line x1="${p.x + 5}" y1="${p.y - 3}" x2="${p.badgeX}" y2="${p.badgeY + 10}" stroke="#111111" stroke-width="1.2" />
    <rect x="${p.badgeX}" y="${p.badgeY}" width="70" height="20" rx="10" class="target-badge-bg" />
    <text x="${p.textX}" y="${p.textY}" class="target-badge-text">${dest.cityTag}</text>
  `;

  // Aggiorna scheda informativa
  if (!isSwapped) {
    destCountryName.textContent = dest.country;
    destUnitsSummary.textContent = dest.subtitle;
  } else {
    const orig = origins[activeOriginIndex];
    destCountryName.textContent = `${orig.label.split(' ')[1]} (Invertito)`;
    destUnitsSummary.textContent = `${orig.currencyCode} (${orig.currencySymbol}) • ${orig.tempUnit} • ${orig.speedUnit}`;
  }

  // Ricalcola subito tutte le conversioni
  refreshAllConversions();
}

/* ==========================================================================
   === BLOCCO 5: GESTIONE EVENTI (INTERAZIONI UTENTE) ===
   Ascoltatori per input utente, pulsante swap, click sul globo e modale.
   ========================================================================== */

// 1. Digitazione in tempo reale nei campi di input
currencyInput.addEventListener('input', updateCurrency);
tempInput.addEventListener('input', updateTemperature);
speedInput.addEventListener('input', updateSpeed);

// 2. Click sul pulsante di inversione (Swap)
swapBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  isSwapped = !isSwapped;
  swapBtn.classList.toggle('swapped', isSwapped);
  renderCurrentDestination();
});

// 3. Apertura/Chiusura menu dropdown Origine in testata
originBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  const isOpen = originDropdown.classList.contains('show');
  originDropdown.classList.toggle('show', !isOpen);
  originBtn.classList.toggle('open', !isOpen);
});

// Selezione dell'origine dal menu a tendina
originDropdown.querySelectorAll('.dropdown-item').forEach(function(btn, index) {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    activeOriginIndex = index;

    originDropdown.querySelectorAll('.dropdown-item').forEach(function(item) {
      item.classList.remove('active');
      const checkIcon = item.querySelector('.material-symbols-rounded');
      if (checkIcon) checkIcon.remove();
    });

    btn.classList.add('active');
    const iconSpan = document.createElement('span');
    iconSpan.className = 'material-symbols-rounded';
    iconSpan.textContent = 'check';
    btn.appendChild(iconSpan);

    originBtnText.textContent = origins[index].label;
    originDropdown.classList.remove('show');
    originBtn.classList.remove('open');

    renderCurrentDestination();
  });
});

// 4. Interazione con il Globo (Click o trascinamento/swipe per cambiare destinazione)
let touchStartX = 0;

globeArea.addEventListener('click', function() {
  activeDestIndex = (activeDestIndex + 1) % destinations.length;
  renderCurrentDestination();
});

globeArea.addEventListener('touchstart', function(e) {
  touchStartX = e.touches[0].clientX;
}, { passive: true });

globeArea.addEventListener('touchend', function(e) {
  const touchEndX = e.changedTouches[0].clientX;
  const deltaX = touchEndX - touchStartX;
  if (deltaX < -30) {
    // Swipe a sinistra: prossima destinazione
    activeDestIndex = (activeDestIndex + 1) % destinations.length;
    renderCurrentDestination();
  } else if (deltaX > 30) {
    // Swipe a destra: destinazione precedente
    activeDestIndex = (activeDestIndex - 1 + destinations.length) % destinations.length;
    renderCurrentDestination();
  }
});

// 5. Modale a comparsa per cambiare direttamente la destinazione
function populateDestModal() {
  destOptionsContainer.innerHTML = '';
  destinations.forEach(function(dest, idx) {
    const isActive = idx === activeDestIndex;
    const optBtn = document.createElement('button');
    optBtn.className = `dest-option-btn ${isActive ? 'active' : ''}`;
    optBtn.innerHTML = `
      <div class="dest-opt-left">
        <span class="dest-opt-flag">${dest.flag}</span>
        <div class="dest-opt-texts">
          <span class="dest-opt-name">${dest.country}</span>
          <span class="dest-opt-sub">${dest.subtitle}</span>
        </div>
      </div>
      ${isActive ? '<span class="material-symbols-rounded dest-opt-check">check</span>' : ''}
    `;
    optBtn.addEventListener('click', function() {
      activeDestIndex = idx;
      destModal.classList.remove('show');
      renderCurrentDestination();
    });
    destOptionsContainer.appendChild(optBtn);
  });
}

destCard.addEventListener('click', function() {
  populateDestModal();
  destModal.classList.add('show');
});

destModal.addEventListener('click', function(e) {
  if (e.target === destModal) {
    destModal.classList.remove('show');
  }
});

// 6. Chiusura dropdown se si clicca fuori nella finestra
window.addEventListener('click', function(e) {
  if (!originDropdown.contains(e.target) && !originBtn.contains(e.target)) {
    originDropdown.classList.remove('show');
    originBtn.classList.remove('open');
  }
});

// 7. Orologio della barra di stato sincronizzato con l'orario reale del dispositivo
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const clockEl = document.querySelector('#clock-time');
  if (clockEl) {
    clockEl.textContent = `${hours}:${minutes}`;
  }
}
updateClock();

// Avvio iniziale dell'applicazione
renderCurrentDestination();
