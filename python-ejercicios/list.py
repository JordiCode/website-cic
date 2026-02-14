demo_list = [1, 'hello', True, 3.14]
colors = ['red', 'green', 'blue']

numero_list = list((1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
print(type(numero_list))

r = list(range(1, 1000))
print(r)
print(len(demo_list))
print(colors[-2])

print(dir(colors))

colors.append('yellow')
colors.extend(['orange', 'purple'])

colors.insert(0, 'black')

colors.sort(reverse=True)
