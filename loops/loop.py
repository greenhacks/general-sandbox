"""Looping in Python with various data structures"""

books_list = ["Bag Man", "LOTR", "Under the Banner of Heaven"] # list

books_dict = {
    1: "Bag Man",
    2: "LOTR",
    3: "Under the Banner of Heaven"
}

books_tuple = ("Bag Man", "LOTR", "Under the Banner of Heaven")

books_set = {"Bag Man", "LOTR", "Under the Banner of Heaven"}

# looping list
for book in books_list:
    print(book)

# looping dict
for book in books_dict.values():
    print(book)

# looping tuple
for book in books_tuple:
    print(book)

# looping set
for book in books_set:
    print(book)