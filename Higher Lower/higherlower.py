import art
import game_data
import os
import random

print(art.logo)

def randomiser():
  return random.randint(0,49)
  
option1=randomiser()
option2=randomiser()
if option1==option2:
  option2=randomiser()
higher=1
score=0
data=game_data.data
while higher:
  print(f"Compare A: {data[option1]['name']} , a {data[option1]['description']} , from {data[option1]['country']}")
  
  print(art.vs)
  
  print(f"Compare B: {data[option2]['name']} , a {data[option2]['description']} , from {data[option2]['country']}")
  
  guess=input("Who has more followers? Type 'A' or 'B'\n").lower()
  
  data1=data[option1]['follower_count']
  data2=data[option2]['follower_count']
  if guess=='a':
    if data1>data2 or data1==data2:
      score+=1
      option2=randomiser()
      os.system('cls')
    else:
      os.system('cls')
      print(f"Sorry Thats Wrong .Your Score is {score}")
      higher=0
  elif guess=='b':
    if data2>data1 or data2==data1 :
      score+=1
      option1=option2
      option2=randomiser()
      os.system('cls')
    else:
      os.system('cls')
      print(f"Sorry Thats Wrong .Your Score is {score}")
      higher=0
