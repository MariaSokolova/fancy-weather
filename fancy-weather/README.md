# fancy-weather

To build the project please use `npm run build`;

To start the project please use `npm start`;


-------

Application structure
The application consists of 4 functional units.

## Unit 1. Dashboard
- button for changing the background image;
- button to toggle languages;
- button toggle between Fahrenheit and Celsius;
- search input.
## Unit 2. Today's weather
- name of the town, country name;
- current date: weekday shortcut, date, month(Mon 29 December);
- time: hours and minutes, for instance, 18:11, should be updated every minute;
- current temperature;
- weather description(summary), feels like temperature,wind speed(m/s), humidity(%);
- weather icon;
## Unit 3. Weather forecast for 3 days
- weekday;
- average temperature;
- weather icon.
## Unit 4. Geolocation data
- coordinates of user's location - latitude, longitude(in degrees and minutes);
- location map.


-[x] Page layout is adaptive;
-[x] the 2nd unit renders data related to the current user location;
-[x] the 3rd unit displays weather forecast for 3 upcoming days, corresponding to the current user location;
-[x] the 4th unit shows geolocation data, corresponding to the current user location( latitude, longitude, map);
-[x] updated according to a new location, including date and time;
-[x] the background image changes after the page reloads or user clicks on the toggle image button;
-[x] implementation of the toggle between temperature units;
-[x] code requirements are fulfilled
  - html-elements generated in js;
  - js code split for modules;
  - webpack was used;
  

