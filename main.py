print('\n is_even')
def is_even(i):   
    if i % 2 != 0 :
        return False
    else :
        return True
    
print(is_even(3))
print(is_even(8))


print('\n div_by')
def div_by(n, d):
        if n > 0 and d > 0 :
            if n % d == 0 :
                return True
            else :
                return False
        else :
            return False
        
print(div_by(10,3))     # print False
print(div_by(0,3))     # print False
print(div_by(195,13))   # returns True



print('\n is_even_range')
def is_even_range() :
    for i in range(1, 11) :
            if i % 2 == 0 :
                print('even', i)
            else :
                print('odd', i)

is_even_range()

