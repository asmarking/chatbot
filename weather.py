import requests
def weather_parser(tag,bot_name):
  if tag.__contains__("today"):
      response = requests.get("https://api.open-meteo.com/v1/forecast?latitude=33.0167&longitude=-117.115&hourly=temperature_2m,relativehumidity_2m,rain,showers&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch")
      weather_data = response.json()
      todays_weather = weather_data['current_weather']
      print(f"{bot_name}: The temperature in San Diego today is {todays_weather['temperature']} degrees fahrenheit")
      return
  elif tag.__contains__("tomorrow"):
    response = requests.get("https://api.open-meteo.com/v1/forecast?latitude=37.3394&longitude=-121.895&hourly=temperature_2m,relativehumidity_2m,rain,showers&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch")
    weather_data = response.json()
    todays_weather = weather_data['current_weather']
    print(f"{bot_name}: The temperature in San Diego tomorrow is {todays_weather['temperature']} degrees fahrenheit")
    return
  elif tag.__contains__("week"):
    response = requests.get("https://api.open-meteo.com/v1/forecast?latitude=37.3394&longitude=-121.895&hourly=temperature_2m,relativehumidity_2m,rain,showers&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch")
    weather_data = response.json()
    todays_weather = weather_data['current_weather']
    print(f"{bot_name}: The weekly forecast is {todays_weather['temperature']} degrees fahrenheit")

    return


      