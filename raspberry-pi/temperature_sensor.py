from time import sleep
from datetime import datetime, timedelta
import RPi.GPIO as GPIO

import Adafruit_DHT
import firebase_admin
from firebase_admin import firestore, credentials

# Global Variables and initial setup
USER_NAME = 'Jane'

DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 14

green_led = 7
red_led = 10
led_list = [green_led, red_led]

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(green_led, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(red_led, GPIO.OUT, initial=GPIO.LOW)

# Firebase init
cred = credentials.Certificate('ServiceAccountKey.json')
app = firebase_admin.initialize_app(cred)
db = firestore.client()

def turn_all_LED_off(led_list: list):
	for i in led_list:
		GPIO.output(i, GPIO.LOW)

while True:
	humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)

	# If no temperature, do not push to db
	if temperature is not None:
		GPIO.output(green_led, GPIO.HIGH)
		print(f"Temp = {temperature}, Hum = {humidity}")

		date_time = datetime.now()

		current_date = date_time.strftime("%a %b %d, %Y") 	# Sat Feb 06, 2021
		current_time = date_time.strftime("%H:%M:%S")		# 20:50:41

		doc_ref = db.collection(USER_NAME).document(u'date')
		doc_ref.set({
			current_date: {
				current_time: {
					u'temperature': temperature,
					u'humidity': humidity,
					u'datetime': date_time
				}
			}
		}, merge=True)

	else:
		GPIO.output(red_led, GPIO.HIGH)
		print("Sensor failed")
	
	sleep(2)
	turn_all_LED_off(led_list)
	sleep(3)
