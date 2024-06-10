# Spotifyguess

Jest to aplikacja wykonana przy wykorzystaniu technologii Angular.
Aplikacja ta jest tylko wersją frontednową pod późniejszą rozbudowe o funkcjonalny serwer

## Uruchomienie
[Otwórz projekt na Stackblitz ⚡️](https://stackblitz.com/~/github.com/Klimczoczek/Projekt_angular) i wpisz następujące komendy:
- `cd client`
- `npm i`
- `ng serve`

## Użycie
### Po uruchomieniu poleca się otworzyć strone projektu w nowej karcie aby uniknąć problemy z api. Ukazuje nam się strona główna pozwalająca wybrać nick oraz stworzyć lub dołączyć do gry.
### Po utworzeniu gry ukazuje nam się lobby pozwalające wyszukać artyste poprzez [Spotify Api](https://developer.spotify.com/documentation/web-api). Po kliknięciu w artyste po lewej stronie ukazują nam się albumy danego artysty
Reszta zostanie dodana po stworzeniu serwera dla tej aplikacji

## Wymagania i zastosowanie
- komponenty -> Strona główna (main) / footer / lobby / artist (dziecko lobby) / game (w trakcie budowy)
- nawigacja (rooting) -> lobby z wykorzystaniem zmiennej id do tworzenia własnych lobby
- serwisy -> serwis localstorage pozwalajacy w łatwy sposób zapisywać wartości w localstorage / spotify auth pozwalający stworzyć klucz do używania api / searchapi pozwalający korzystać z api
- ngFor -> wykorzystany przy wyświetlaniu albumów oraz przy wyświetlaniu artystów (oba znajdują się w komponencie lobby)
- ngIf -> pokazanie tabeli artystów po wpisaniu do inputu (lobby)
- api -> wykorzystanie [Spotify Api](https://developer.spotify.com/documentation/web-api) w serwisach które później pojawia się w komponencie lobby (artyści oraz albumy)
- input -> wykorzystany aby wysłać onformacje z api do komponentu artist (lobby)
- output -> wykorzystany przy otrzymywaniu id z komponentu artist do lobby w celu wykorzystania do api
- ngClass -> wykorzystane przy przyciskach wyboru lobby (host/join) na stronie głównej
- ngStyle -> wykorzystane przy ukrywaniu inputa na stronie głównej
- obsługa formularzy -> formularz dołączania do lobby

## Znane błędy
Z niejasnego dla mnie powodu podczas wejścia na strone główną wyskakuje błąd w konsoli `localstorage is not defined` jednak nie wpływa on na działanie tego serwisu
  



