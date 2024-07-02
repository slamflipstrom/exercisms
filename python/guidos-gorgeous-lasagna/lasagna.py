"""
Functions used in preparing Guido's gorgeous lasagna.
"""

EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2


def bake_time_remaining(elapsed_bake_time: int) -> int:
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """

    return EXPECTED_BAKE_TIME - elapsed_bake_time


def preparation_time_in_minutes(layers: int) -> int:
    """Returns prep time in minutes depending on layers
    :param layers: int - number of layers of lasagna
    :return: int - preparation time
    """

    return PREPARATION_TIME * layers


def elapsed_time_in_minutes(layers: int, elapsed_baking_time: int) -> int:
    """Calculate the elapsed time in minutes.

    :param layers: int - number of layers of lasagna.
    :param elapsed_baking_time: int - baking time already elapsed.
    :return: int - elapsed time in minutes.
    """
    total_prep_time = preparation_time_in_minutes(layers)

    return total_prep_time + elapsed_baking_time
