# klijentske-veb-tehnologije-2024-2023-0497-vremenska-prognoza
# Weather App

Aplikacija za pregled vremenske prognoze izrađena korišćenjem React-a sa TypeScript-om i Vite alatom za brzo pokretanje i razvoj. Aplikacija je responzivna zahvaljujući TailwindCSS stilizaciji i omogućava korisnicima da na brz i pregledan način prate vremensku prognozu za željenu lokaciju.

## Funkcionalnosti

- **Izbor lokacije**  
  Na početnoj stranici korisnik može da unese lokaciju preko Google Maps pretrage, klikne direktno na mapu ili koristi opciju Use my location (geolokacija uređaja). Izabrana lokacija se čuva u Zustand store i sinhronizuje sa localStorage radi trajnosti.

- **Trenutna prognoza (Current)**  
  Prikazuje trenutnu temperaturu, ikonicu vremenskog stanja, opis (sunčano, oblačno…), subjektivni osećaj i vlažnost. Podaci dolaze sa OpenWeather Current Weather API-ja.

- **Nedeljna prognoza (Weekly)**  
  Prikaz vremenske prognoze za narednih 7 dana preko OpenWeather One Call API-ja. Svaki dan je predstavljen u obliku kartice sa maksimalnom i minimalnom temperaturom, verovatnoćom padavina, brzinom vetra i vlažnošću.

- **Prognoza po satima (Hourly)**  
  Horizontalni prikaz prognoze za narednih 24 sata, sa temperaturom, ikonicom, opisom i verovatnoćom padavina. Takođe koristi **One Call API**.

- **Detalji (Details)**  
  Sveobuhvatan prikaz trenutnih vremenskih uslova: pritisak, brzina i pravac vetra, UV indeks, oblačnost, vidljivost, tačka rose, izlazak i zalazak sunca.

- **Komponente**  
  Korišćene su reusable komponente za kartice (WeatherDayCard, HourCard), za prikaz dodatnih statistika (StatItem), kao i za poruke o greškama i obaveštenja (AlertCard, InfoNote).

## Korišćene tehnologije i biblioteke

- **React + TypeScript** za interfejs i tipizaciju
- **Vite** za brzi build i development server
- **TailwindCSS** za stilizaciju i responzivni dizajn
- **React Router** za višestruke stranice (Home, Current, Weekly, Hourly, Details)
- **Zustand** za upravljanje globalnim stanjem (izabrana lokacija)
- **@react-google-maps/api** za prikaz mape i pretragu lokacije
- **lucide-react** za moderne ikone
- **OpenWeather API** za vremenske podatke (Current + One Call)

## Stranice

- / – Home (izbor lokacije)
- /current – Trenutna prognoza
- /weekly – Nedeljna prognoza
- /hourly – Prognoza po satima
- /details – Detaljni parametri vremenskih uslova

## Pokretanje aplikacije lokalno

1. Kloniraj repozitorijum:
   ```bash
   git clone https://github.com/ime-korisnika/weather-app.git
   cd weather-app
   ```
2. Instaliraj dependencies:

   ```bash
   npm install
   ```

3. Kreiraj .env fajl u root direktorijumu i dodaj svoje API ključeve:
   VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_KEY
   VITE_OWM_API_KEY=YOUR_OPENWEATHER_KEY

4. Pokreni aplikaciju:

   ```bash
   npm run dev
   ```

5. Otvori u pretraživaču:
   http://localhost:5173
