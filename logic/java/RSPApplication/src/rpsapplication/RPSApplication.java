package rpsapplication;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Random;

public class RPSApplication {

    public enum RPS {
        Rock, Paper, Scissors
    };

    public enum Result {
        Win, Loose, Even
    };

    private static String getPrintableRPS(RPS rps) {
        switch (rps) {
            case Rock:
                return "rock";
            case Paper:
                return "paper";
            case Scissors:
                return "scissors";
            default:
                return "unknown";
        }
    }

    private static String getPrintableResult(Result result) {
        switch (result) {
            case Win:
                return "won";
            case Loose:
                return "lost";
            case Even:
                return "are even";
            default:
                return "unknown";
        }
    }

    private static RPS getRPSFromInteger(int value) {
        switch (value) {
            case 0:
                return RPS.Rock;
            case 1:
                return RPS.Paper;
            default:
                return RPS.Scissors;
        }
    }

    private static RPS getRandomRPS() {
        Random rand = new Random();
        return getRPSFromInteger(rand.nextInt(3));
    }

    private static Result getResult(RPS a, RPS b) {
        Result result = Result.Loose;
        if (a == b) {
            result = Result.Even;
        } else if ((a == RPS.Rock && b == RPS.Scissors)
                || (a == RPS.Scissors && b == RPS.Paper)
                || (a == RPS.Paper && b == RPS.Rock)) {
            result = Result.Win;
        }

        return result;
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        int turn = 3;
        int monsters = 2;
        System.out.println("Player turn is " + turn);
        System.out.println("Monster count is " + monsters);

        while (turn > 0 && monsters > 0) {
            turn--;

            System.out.print("Enter a number: rock(0), paper(1), scissors(2) > ");

            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            try {
                String valuestring = br.readLine();
                int value = Integer.parseInt(valuestring);
                RPS player = getRPSFromInteger(value);
                System.out.println("Player has " + getPrintableRPS(player));

                RPS computer = getRandomRPS();
                System.out.println("Monster has " + getPrintableRPS(computer));

                Result result = getResult(player, computer);
                System.out.println("You " + getPrintableResult(result) + "!!");

                if (result == Result.Win || result == Result.Even) {
                    monsters--;
                } else if (monsters == 1) {
                    monsters++;
                }

                System.out.println("Remaining player turn is " + turn);
                System.out.println("Remaining monster count is " + monsters);

            } catch (IOException nfe) {
                System.err.println("Invalid Format!");
            }
        }

        System.out.println("Game over");
        if (monsters == 0) {
            System.out.println("Congraturations! You defeated both monsters!");
        } else {
            System.out.println("You weren't able to defeat the two monsters. Try again!");
        }
    }
}