# HTML 페이지의 입력 값을 얻어
# 랜덤값과 같다면 True, 다르다면 False
import random

number_input = Element("number_input")
result = Element("result")

def play_game(*args):
    user_guess = number_input.value
    machine_guess = random.randint(1, 50)
    if user_guess == '':
        result.element.innerText = "Input value is null:("
        return False

    if int(user_guess) == machine_guess:
        # user wins
        result.element.innerText = "You win!"
    else:
        # users looses
        result.element.innerText = f"You lost! The machine chose {machine_guess}!"

    number_input.clear()