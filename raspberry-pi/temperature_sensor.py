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

cred = credentials.Certificate('ServiceAccountKey.json')
app = firebase_admin.initialize_app(cred)
db = firestore.client()

def turn_all_LED_off(led_list: list):
	for i in led_list:
		GPIO.output(i, GPIO.LOW)

counter = 0
while counter < 10:
	humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
	if temperature is not None:
		GPIO.output(green_led, GPIO.HIGH)
		print(f"Temp = {temperature}, Hum = {humidity}")

		# date_time = datetime.now()
		date_time = datetime.now() - timedelta(days=7)

		current_date = date_time.strftime("%a %b %d, %Y")
		current_time = date_time.strftime("%H:%M:%S")

		doc_ref = db.collection(USER_NAME).document(u'date')
		doc_ref.set({
			current_date: {
				current_time: {
					u'temperature': temperature,
					u'humidity': humidity,
					u'user': USER_NAME,
					u'datetime': date_time
				}
			}
		}, merge=True)
		
		# Old method
		# day_ref = doc_ref.collection(u'times').document(current_time)
		# day_ref.set({
		# 	u'temperature': temperature,
		# 	u'humidity': humidity,
		# 	u'time': current_time,
		# 	u'user': USER_NAME
		# })
		counter += 1
	else:
		GPIO.output(red_led, GPIO.HIGH)
		print("Sensor failed")
	
	sleep(5)
	turn_all_LED_off(led_list)
	sleep(5)
