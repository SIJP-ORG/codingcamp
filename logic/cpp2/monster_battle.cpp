#include <string>
#include <iostream>
#include <cstdlib>
#include <ctime>

enum RPS { rock, paper, scissors };
enum Result { win, loose, even };

std::string getPrintableRPS(RPS rps)
{
	switch (rps)
	{
	case RPS::rock:
		return "rock";
	case RPS::paper:
		return "paper";
	default:
		return "scissors";
	}
}

std::string getPrintableResult(Result result)
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
	std::cout << "Player turn is " << turn << std::endl;
	std::cout << "Monster count is " << monsters << std::endl;

	while (turn > 0 && monsters > 0)
	{
		turn--;

		int value;
		std::cout << "Enter a number: rock(0), paper(1), scissors(2) > ";
		std::cin >> value;

		RPS player = static_cast<RPS>(value);
		std::cout << "Player has " << getPrintableRPS(player) << std::endl;

		RPS computer = getRandomRPS();
		std::cout << "Monster has " << getPrintableRPS(computer) << std::endl;

		Result result = getResult(player, computer);
		std::cout << "You " << getPrintableResult(result) << "!!" << std::endl;

		if (result == Result::win || result == Result::even)
		{
			monsters--;
		}
		else if (monsters == 1)
		{
			monsters++;
		}

		std::cout << "Remainng player turn is " << turn << std::endl;
		std::cout << "Remaining monster count is " << monsters << std::endl;
	}

	std::cout << "Game over" << std::endl;
	if (monsters == 0)
	{
		std::cout << "Congraturations! You defeated both monsters!" << std::endl;
	}
	else
	{
		std::cout << "You wern't able to defeat the two monsters. Try again!" << std::endl;
	}
}
