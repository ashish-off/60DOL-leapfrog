#exception : an event that interrupts the flow of a program
#try, except, finally

try:
    number = int(input("Enter a number: "))
    print(1/number)
except ValueError:
    print("You must enter only a number.")
except ZeroDivisionError:
    print("You cannot divide by zero.")
except Exception :
    print("An unexpected error occurred.")
finally:
    print("This will always execute, regardless of an error.")