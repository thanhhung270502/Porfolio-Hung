# from functools import *

# def my_func(*kids):
#     print("Hello: ", kids[3])

# my_func("Duong", "Ngoc", "Gia", "Han")

# # def myfunc(**rec):
# #     for x, y in rec.items:
# #         print(x,y)
# # myfunc(ho="duong", ten="han", namsinh="2005")

# def func1(x):
#     return x, x+2
# a,b = func1(5)
# print(a,b)

# x = 3
# def f():
#     y = 4
#     def g():
#         t = 2
#         print(z)

# f()

x, y = 3, 4
def f():
    x = 2
    return x + y
def g():
    global x
    x = 2
    return 2 + x
print(f())
print(x)
print(y)
print(g())
print(x)
print(y)