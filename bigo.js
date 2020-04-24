/*
FAST                                        SLOW
O(1)    O(logn)     O(n)      O(n^2)      O(k^n)

If we have multiple loops not inside of each other add them together

If we nested loops is n to that power - 2 nested loops n^2 - 3 nested loops n^3

O(logn) - as your input increases, your work / number of operations that needs to be done decreases by a fraction
e.g. you have a loop and everytime you loop you cut your problem in half, that would be 0(logn)

O(n log n) - linear loop cutting it in half each time

*/