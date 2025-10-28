#!/usr/bin/env python3
"""
✊✋✌️ Rock Paper Scissors Game
A simple command-line game written in Python.
Author: YourName
License: MIT
"""

import random
import time

def get_computer_choice():
    return random.choice(["rock", "paper", "scissors"])

def get_winner(player, computer):
    if player == computer:
        return "draw"
    elif (player == "rock" and computer == "scissors") or \
         (player == "scissors" and computer == "paper") or \
         (player == "paper" and computer == "rock"):
        return "player"
    else:
        return "computer"

def play_game():
    print("🎮 Welcome to Rock, Paper, Scissors!")
    print("Type 'rock', 'paper', or 'scissors' to play. Type 'quit' to exit.\n")

    while True:
        player_choice = input("👉 Your move: ").lower().strip()

        if player_choice == "quit":
            print("👋 Thanks for playing!")
            break

        if player_choice not in ["rock", "paper", "scissors"]:
            print("⚠️ Invalid choice! Please choose rock, paper, or scissors.\n")
            continue

        computer_choice = get_computer_choice()
        print(f"🤖 Computer chose: {computer_choice}")
        time.sleep(0.5)

        winner = get_winner(player_choice, computer_choice)

        if winner == "draw":
            print("😐 It's a draw!\n")
        elif winner == "player":
            print("🎉 You win!\n")
        else:
            print("💀 You lose!\n")

if __name__ == "__main__":
    play_game()
