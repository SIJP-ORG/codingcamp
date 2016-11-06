from enum import Enum
import sys
import random

class Rps(Enum):
	rock, paper, scissors = range(3)

class Result(Enum):
	win, lose, even =  range(3)

def getRandomRps():
	return Rps(random.randint(0, 2))

def getResult(a, b):
	if a==b:
		return Result.even
	elif ((a == Rps.rock and b == Rps.scissors) or
		  (a == Rps.scissors and b == Rps.paper) or
		  (a == Rps.paper and b == Rps.rock)):
		  	return Result.win
	else:
		return Result.lose

def main():
	turn = 3;
	monsters = 2;
	print("Player turn is %d" % turn)
	print("Monster count is %d" % monsters)

	while (turn > 0 and monsters > 0):
		turn -= 1

		num = input("Enter a number: rock(0), paper(1), scissors(2) > ")
		player = Rps(int(num))
		print("Player has %s" % player.name)
		
		monster = getRandomRps()
		print("Monster has %s"% monster.name)

		result = getResult(player, monster);
	
		print("You %s !!" % result.name)

		if (result == Result.win or result == Result.even):
			monsters -= 1
		elif (monsters == 1):
			monsters += 1

		print("Remaining player turn is %d" % turn)
		print("Remaining monster count is %d" % monsters)

	print("Game over")
	if monsters == 0:
		print("Congraturations! You defeated both monsters!")
	else:
		print("You weren't able to defeat the two monsters.")
		
main()