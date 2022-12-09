numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# iterate throught the array backwards
# and push the values to the new array

def reverse(array):
    reverse = []
    
    for index in range(len(array) - 1, -1, -1):
        reverse.append(array[index])
    
    return reverse

# without returning a new array

def reverse_array(array):
    start = 0
    end = len(array) - 1

    while start < end:
        front = array[start]
        rear = array[end]
        array[start], array[end] = rear, front

        start += 1
        end -= 1
    
    return array

print(reverse(numbers))
print(reverse_array(numbers))