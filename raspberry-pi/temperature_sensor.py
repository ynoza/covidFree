from time import sleep
from datetime import datetime, timedelta
import RPi.GPIO as GPIO

import Adafruit_DHT
import firebase_admin
from firebase_admin import firestore, credentials

USER_NAME = 'Adam'

DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 14

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(7, GPIO.OUT, initial=GPIO.LOW)

cred = credentials.Certificate('ServiceAccountKey.json')
app = firebase_admin.initialize_app(cred)
db = firestore.client()

while True:
	GPIO.output(7, GPIO.HIGH)
	humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
	if temperature is not None:
		print(f"Temp = {temperature}, Hum = {humidity}")

		# date_time = datetime.now()
		date_time = datetime.now() + timedelta(days=1)

		current_date = date_time.strftime("%b %d, %Y")
		current_time = date_time.strftime("%H:%M:%S")

		doc_ref = db.collection(USER_NAME).document(current_date)
		day_ref = doc_ref.collection(u'times').document(current_time)
		day_ref.set({
			u'temperature': temperature,
			u'humidity': humidity,
			u'time': current_time,
			u'user': USER_NAME
		})
	else:
		print("Sensor failed")
	
	sleep(5)
	GPIO.output(7, GPIO.LOW)
	sleep(25)
