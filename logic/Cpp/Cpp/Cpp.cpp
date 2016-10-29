#include <string>
#include <iostream>
#include <cstdlib>
#include <ctime>

enum RPS { rock, paper, scissors };
enum Result { win, loose, even };

using namespace std;

string getPrintableRPS(RPS rps)
{
	switch (rps)
	{
	case RPS::rock:
		return "rock";
	case RPS::paper:
		return "paper";
	case RPS::scissors:
		return "scissors";
	default:
		return "unknown";
	}
}

string getPrintableResult(Result result)
{
	switch (result)
	{
	case win:
		return "won";
	case loose:
		return "lost";
	case even:
		return "are even";
	default:
		return "unknown";
	}
}

RPS getRandomRPS()
{
	srand(time(0));
	return static_cast<RPS>(rand() % 3);
}

Result getResult(RPS a, RPS b)
{
	Result result = Result::loose;
	if (a == b)
	{
		result = Result::even;
	}
	else if ((a == RPS::rock && b == RPS::scissors) ||
		(a == RPS::scissors && b == RPS::paper) ||
		(a == RPS::paper && b == RPS::rock))
	{
		result = Result::win;
	}

	return result;
}

void main()
{
	int turn = 3;
	int monsters = 2;
	cout << "Player turn is " << turn << endl;
	cout << "Monster count is " << monsters << endl;

	while (turn > 0 && monsters > 0)
	{
		turn--;

		int value;
		cout << "Enter a number: rock(0), paper(1), scissors(2) > ";
		cin >> value;

		RPS player = static_cast<RPS>(value);
		cout << "Player has " << getPrintableRPS(player) << endl;

		RPS computer = getRandomRPS();
		cout << "Monster has " << getPrintableRPS(computer) << endl;

		Result result = getResult(player, computer);
		cout << "You " << getPrintableResult(result) << "!!" << endl;

		if (result == Result::win || result == Result::even)
		{
			monsters--;
		}
		else if (monsters == 1)
		{
			monsters++;
		}

		cout << "Remaining player turn is " << turn << endl;
		cout << "Remaining monster count is " << monsters << endl;
	}

	cout << "Game over" << endl;
	if (monsters == 0)
	{
		cout << "Congraturations! You defeated both monsters!" << endl;
	}
	else
	{
		cout << "You weren't able to defeat the two monsters. Try again!" << endl;
	}
}
