from random import random
from re import A


import random
print("\nWelcome to the Number guessing game")
print("Im thinking of a number between 1 and 100")
diff=input("Choose the difficulty. Type 'Easy' or 'Hard'\n").lower()

num=random.randint(0,100)
print(num)

def checkans(user_guess,answer):
    if user_guess>answer:
        print("Too high")
    elif user_guess<answer:
        print("Too low")
    else:
        print(f"The answer was {answer}")

def hard(attempt):
    while attempt:
        print(f"You have {attempt} attempts left")
        guess=int(input("Make a guess: "))
        if guess==num:
            attempt=False
            print("You Won")
        else:
            attempt-=1
            if attempt==0:
                print("You are out of chances. You Lose")
                break;
        checkans(guess,num)
        
    
def easy(attempt):
    while attempt:
        print(f"You have {attempt} attempts left")
        guess=int(input("Make a guess: "))
        if guess==num:
            attempt=False
            print("You Won")
        else:
            attempt-=1
            if attempt==0:
                print("You are out of chances. You Lose")
                break;
        checkans(guess,num)
        

if diff=="hard":
    attempts=5
    hard(attempts)
elif diff=="easy":
    attempts=10
    easy(attempts)

    
