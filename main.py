#    is_even(int)
print('\n is_even')
def is_even(i):   
    if i % 2 != 0 :
        return False
    else :
        return True
    
print(is_even(3))
print(is_even(8))

#    div_by(num, divisor)
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


#    is_even_range()
print('\n is_even_range')
def is_even_range(n1, n2) :
    for i in range(n1, n2+1) :
            if i % 2 == 0 :
                print('even', i)
            else :
                print('odd', i)

print(is_even_range(1, 10))
print(is_even_range(2, 12))

