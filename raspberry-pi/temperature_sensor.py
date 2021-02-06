from time import sleep
import requests
import Adafruit_DHT

r = requests.get("https://reqres.in/api/users?page=2")

print(r.status_code)

DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 14

while True:
	humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
	if temperature is not None:
		print(f"Temp = {temperature}, Hum = {humidity}")
	else:
		print("Sensor failed")
	sleep(3)
