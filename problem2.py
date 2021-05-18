class NearPalindromesDiv1:
    def __init__(self, inputStr):
        self.inputStr = inputStr
    #Check if input string is near-palindrome
    def isNearPalindrome(self):
        charFrequency = {}
        for i in self.inputStr:
            charFrequency[i] = charFrequency.get(i, 0) + 1
        oddCharCount = 0
        for _, c in charFrequency.items():
            if c % 2 == 1:
               oddCharCount += 1
            if oddCharCount > 1:
               return False
        return True
    #Calculate number of operations to convert string to near-palindrome.
    def solve(self): 
        nOperations = 0
        incremented = ''
        if self.isNearPalindrome() == False:
           first = 0
           last = len(self.inputStr) - 1
           s = list(self.inputStr)
           nearPalindrome = ''
           while first < last:
              if s[first] != s[last]:
                # print("Character " + chr(min(ord(s[first]), ord(s[last]))))
                incremented = chr(min(ord(s[first]), ord(s[last])) + 1)
                nOperations += 1
                # print("Replaced by " + incremented)
                # nearPalindrome = ''.join(s)
                # nearPalindrome = nearPalindrome.replace(chr(min(ord(s[first]), ord(s[last]))), incremented)
              first += 1
              last -= 1
           print(nOperations)
        else:
            print(-1) #String is already a near-palindrome

def main():
    S = "hello"
    obj = NearPalindromesDiv1(S)
    obj.solve()

if __name__ == "__main__":
    main()