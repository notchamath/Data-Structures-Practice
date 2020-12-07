#Problem: write a recursive function that returns the sum of all digits of an int input

def sumDigits(num):
	if num == 0:
		return 0
	return num % 10 + sumDigits(int(num/10))


num = 1234567
sum = 0

print(sumDigits(num))