def check_for_sum(array, sum):

    dict = {}

    for num in array:

        if sum - num in dict:
            return print(True)

        dict[num] = num

    return print(False)


check_for_sum([3, 4, 1, 2, 8], 6)