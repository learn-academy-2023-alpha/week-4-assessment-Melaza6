# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

def even_or_odd(value)
    if value.even?
        "#{value} is even"
    else
        "#{value} is odd"
    end
end


num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# p even_or_odd(num1)
# --->"7 is odd"
# p even_or_odd(num2)
# --->"42 is even"
# p even_or_odd(num3)
# --->"221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_removal array
    array.delete 'aeiouAEIOU'
end

# p vowel_removal(beatles_album1)
# --->"Rbbr Sl"
# p vowel_removal(beatles_album2)
# --->"Sgt Pppr"
# p vowel_removal(beatles_album3)
# --->"bby Rd"


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

def palindrome(string)
   if string.downcase == string.downcase.reverse
    "#{string} is a palindrome"
   else
    "#{string} is not a palindrome"
   end
end

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


# p palindrome(palindrome_tester1)
# --->"Racecar is a palindrome"
# p palindrome(palindrome_tester2)
# --->"LEARN is not a palindrome"
# p palindrome(palindrome_tester3)
# --->"Rotator is a palindrome"