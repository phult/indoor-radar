
#include <Stepper.h>
const float totalSteps = 32;
const float stepsPerRevolution = 64;
const float stepLength = 16;
Stepper myStepper(64, 8, 9, 10, 11);
const int proximitySensorTrigPin = 7;
const int proximitySensorEchoPin = 6;
const int startBtnPin = 5;
int isClockWise = 1;
int stepCount = 0;
int powerState = 0;
void setup() {
  pinMode(proximitySensorTrigPin,OUTPUT);
  pinMode(proximitySensorEchoPin,INPUT);
  pinMode(startBtnPin, INPUT_PULLUP);
  Serial.begin(9600);
  myStepper.setSpeed(100);
}

void loop() {  
  if (digitalRead(startBtnPin) == LOW) {
    powerState = (powerState == 0 ? 1 : 0);
    delay(500);
  }
  if (powerState == 1) {
    if (isClockWise == 1 && stepCount < 128) {   
      myStepper.step(stepLength);
      stepCount++;
      if (stepCount == 128) {
        isClockWise = 0;
      }      
      Serial.print(((360 / (totalSteps * stepsPerRevolution)))* (stepCount * stepLength));
      Serial.print("-");
      Serial.print(measureDistance());
      Serial.println("");
    } else if (isClockWise == 0 && stepCount > 0) {
      myStepper.step(-stepLength);
      stepCount--;
      if (stepCount == 0) {
        isClockWise = 1;
      }
    } 
    delay(50); 
  }  
}

int measureDistance() {
  unsigned long duration; // biến đo thời gian
  int distance;           // biến lưu khoảng cách
  /* Phát xung từ chân trig */
  digitalWrite(proximitySensorTrigPin, 0);   // tắt chân trig
  delayMicroseconds(2);
  digitalWrite(proximitySensorTrigPin, 1);   // phát xung từ chân trig
  delayMicroseconds(5);   // xung có độ dài 5 microSeconds
  digitalWrite(proximitySensorTrigPin, 0);   // tắt chân trig  
  // Đo độ rộng xung HIGH ở chân echo. 
  duration = pulseIn(proximitySensorEchoPin, HIGH);  
  distance = int(duration/2/29.412);  
  return distance;
}
