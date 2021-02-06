from time import sleep
from datetime import datetime
# import requests
import Adafruit_DHT
import firebase_admin
from firebase_admin import firestore, credentials

DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 14

cred = credentials.Certificate('ServiceAccountKey.json')
app = firebase_admin.initialize_app(cred)
db = firestore.client()

while True:
	humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
	if temperature is not None:
		print(f"Temp = {temperature}, Hum = {humidity}")

		date_time = date_time.now()

		doc_ref = db.collection(u'test').document(u'testdate')
		doc_ref.set({
			u'temperature': temperature,
			u'humidity': humidity,
			u'time': date_time
		})
	else:
		print("Sensor failed")
	
	sleep(10)
