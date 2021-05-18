for num in range(1, 101):
    if num % 3 == 0 and num % 5 == 0:
        print('SenirOp')
    elif num % 3 == 0:
        print('Senir')
    elif num % 5 == 0:
        print('Op')
    else:
        print(num) 