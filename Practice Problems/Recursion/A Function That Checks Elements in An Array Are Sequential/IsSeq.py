#Problem: write a recursive function that checks if an input array is in sequential order and returns a bool value

def isSeq(arr, n):
	
	#base case
	if n == 1:
		return True
	
	#Recurrence relation
	if arr[n - 1] - 1 == arr[n - 2]:
		return isSeq(arr, n-1)

	return False

arr = [2,3,4,5,6,7]  #array input
n = len(arr)		 #length of the array
print(isSeq(arr, n))