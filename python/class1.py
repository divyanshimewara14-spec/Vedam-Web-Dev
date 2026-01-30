import sys

print("hellow world")
a = int(sys.argv[1]) if len(sys.argv) > 1 else 10
b = int(sys.argv[2]) if len(sys.argv) > 2 else 20
c = a + b
print("The sum is:", c)

