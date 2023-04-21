rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

import random
game=[rock,paper,scissors]
user=int(input("What do you choose? \nType 0 for Rock, 1 for Paper or 2 for Scissors: "))
pc=random.randint(0,2)
print(f"Computer chose {pc}")

if user==pc:
  print("Draw")
  print(game[user],game[pc])
elif ((user==0) and (pc==2)) or ((user==1) and (pc==0)) or ((user==2) and (pc==0)) :
  print("User Wins")
  print(game[user],game[pc])
elif ((user==0) and (pc==1)) or ((user==1) and (pc==2)) or ((user==2) and (pc==1)) :
  print("Computer Wins")
  print(game[user],game[pc])
else :
  print("Wrong  input")
