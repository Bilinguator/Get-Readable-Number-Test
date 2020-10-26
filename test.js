describe(`Test of the getReadableNumber function.
This function takes a number from 0 to 999 as an argument.
The type of the argument can be both number and string.
The function returns a verbal representation of the argument.
For instance, getReadableNumber(55) will return "fifty five" string.
If input is invalid the function returns undefined`, function() {
 
  describe('Positive tests: numbers', function() {

    it('Expected "zero" when argument is 0 (number)', function() {
      assert.equal(getReadableNumber(0), 'zero');
    });

    it('Expected "one" when argument is 1 (number)', function() {
      assert.equal(getReadableNumber(1), 'one');
    });

    it('Expected "five" when argument is 5 (number)', function() {
      assert.equal(getReadableNumber(5), 'five');
    });

    it('Expected "nine" when argument is 9 (number)', function() {
      assert.equal(getReadableNumber(9), 'nine');
    });

    it('Expected "ten" when argument is 10 (number)', function() {
      assert.equal(getReadableNumber(10), 'ten');
    });

    it('Expected "eleven" when argument is 11 (number)', function() {
      assert.equal(getReadableNumber(11), 'eleven');
    });

    it('Expected "sixteen" when argument is 16 (number)', function() {
      assert.equal(getReadableNumber(16), 'sixteen');
    });

    it('Expected "nineteen" when argument is 19 (number)', function() {
      assert.equal(getReadableNumber(19), 'nineteen');
    });

    it('Expected "twenty" when argument is 20 (number)', function() {
      assert.equal(getReadableNumber(20), 'twenty');
    });

    it('Expected "twenty one" when argument is 21 (number)', function() {
      assert.equal(getReadableNumber(21), 'twenty one');
    });
   
    it('Expected "twenty four" when argument is 24 (number)', function() {
      assert.equal(getReadableNumber(24), 'twenty four');
    });

    it('Expected "twenty nine" when argument is 29 (number)', function() {
      assert.equal(getReadableNumber(29), 'twenty nine');
    });

    it('Expected "thirty" when argument is 30 (number)', function() {
      assert.equal(getReadableNumber(30), 'thirty');
    });
    
    it('Expected "thirty one" when argument is 31 (number)', function() {
      assert.equal(getReadableNumber(31), 'thirty one');
    });

    it('Expected "thirty seven" when argument is 37 (number)', function() {
      assert.equal(getReadableNumber(37), 'thirty seven');
    });

    it('Expected "forty" when argument is 40 (number)', function() {
      assert.equal(getReadableNumber(40), 'forty');
    });

    it('Expected "forty one" when argument is 41 (number)', function() {
      assert.equal(getReadableNumber(41), 'forty one');
    });

    it('Expected "forty five" when argument is 45 (number)', function() {
      assert.equal(getReadableNumber(45), 'forty five');
    });

    it('Expected "fifty" when argument is 50 (number)', function() {
      assert.equal(getReadableNumber(50), 'fifty');
    });

    it('Expected "sixty" when argument is 60 (number)', function() {
      assert.equal(getReadableNumber(60), 'sixty');
    });

    it('Expected "seventy" when argument is 70 (number)', function() {
      assert.equal(getReadableNumber(70), 'seventy');
    });

    it('Expected "eighty" when argument is 80 (number)', function() {
      assert.equal(getReadableNumber(80), 'eighty');
    });

    it('Expected "ninety" when argument is 90 (number)', function() {
      assert.equal(getReadableNumber(90), 'ninety');
    });

    it('Expected "ninety nine" when argument is 99 (number)', function() {
      assert.equal(getReadableNumber(99), 'ninety nine');
    });

    it('Expected "one hundred" when argument is 100 (number)', function() {
      assert.equal(getReadableNumber(100), 'one hundred');
    });

    it('Expected "one hundred one" when argument is 101 (number)', function() {
      assert.equal(getReadableNumber(101), 'one hundred one');
    });

    it('Expected "one hundred ten" when argument is 110 (number)', function() {
      assert.equal(getReadableNumber(110), 'one hundred ten');
    });

    it('Expected "one hundred eleven" when argument is 111 (number)', function() {
      assert.equal(getReadableNumber(111), 'one hundred eleven');
    });

    it('Expected "one hundred thirty" when argument is 130 (number)', function() {
      assert.equal(getReadableNumber(130), 'one hundred thirty');
    });

    it('Expected "one hundred forty seven" when argument is 147 (number)', function() {
      assert.equal(getReadableNumber(147), 'one hundred forty seven');
    });

    it('Expected "one hundred ninety nine" when argument is 199 (number)', function() {
      assert.equal(getReadableNumber(199), 'one hundred ninety nine');
    });

    it('Expected "two hundred" when argument is 200 (number)', function() {
      assert.equal(getReadableNumber(200), 'two hundred');
    });

    it('Expected "two hundred one" when argument is 201 (number)', function() {
      assert.equal(getReadableNumber(201), 'two hundred one');
    });

    it('Expected "two hundred nineteen" when argument is 219 (number)', function() {
      assert.equal(getReadableNumber(219), 'two hundred nineteen');
    });

    it('Expected "two hundred ninety nine" when argument is 299 (number)', function() {
      assert.equal(getReadableNumber(299), 'two hundred ninety nine');
    });

    it('Expected "three hundred" when argument is 300 (number)', function() {
      assert.equal(getReadableNumber(300), 'three hundred');
    });

    it('Expected "three hundred one" when argument is 301 (number)', function() {
      assert.equal(getReadableNumber(301), 'three hundred one');
    });

    it('Expected "three hundred nineteen" when argument is 319 (number)', function() {
      assert.equal(getReadableNumber(319), 'three hundred nineteen');
    });

    it('Expected "three hundred ninety nine" when argument is 399 (number)', function() {
      assert.equal(getReadableNumber(399), 'three hundred ninety nine');
    });

    it('Expected "four hundred" when argument is 400 (number)', function() {
      assert.equal(getReadableNumber(400), 'four hundred');
    });

    it('Expected "four hundred one" when argument is 401 (number)', function() {
      assert.equal(getReadableNumber(401), 'four hundred one');
    });

    it('Expected "four hundred nineteen" when argument is 419 (number)', function() {
      assert.equal(getReadableNumber(419), 'four hundred nineteen');
    });

    it('Expected "four hundred ninety nine" when argument is 499 (number)', function() {
      assert.equal(getReadableNumber(499), 'four hundred ninety nine');
    });

    it('Expected "five hundred" when argument is 500 (number)', function() {
      assert.equal(getReadableNumber(500), 'five hundred');
    });

    it('Expected "five hundred one" when argument is 501 (number)', function() {
      assert.equal(getReadableNumber(501), 'five hundred one');
    });

    it('Expected "five hundred nineteen" when argument is 519 (number)', function() {
      assert.equal(getReadableNumber(519), 'five hundred nineteen');
    });

    it('Expected "five hundred ninety nine" when argument is 599 (number)', function() {
      assert.equal(getReadableNumber(599), 'five hundred ninety nine');
    });

    it('Expected "six hundred" when argument is 600 (number)', function() {
      assert.equal(getReadableNumber(600), 'six hundred');
    });

    it('Expected "six hundred one" when argument is 601 (number)', function() {
      assert.equal(getReadableNumber(601), 'six hundred one');
    });

    it('Expected "six hundred nineteen" when argument is 619 (number)', function() {
      assert.equal(getReadableNumber(619), 'six hundred nineteen');
    });

    it('Expected "six hundred ninety nine" when argument is 699 (number)', function() {
      assert.equal(getReadableNumber(699), 'six hundred ninety nine');
    });

    it('Expected "seven hundred" when argument is 700 (number)', function() {
      assert.equal(getReadableNumber(700), 'seven hundred');
    });

    it('Expected "seven hundred one" when argument is 701 (number)', function() {
      assert.equal(getReadableNumber(701), 'seven hundred one');
    });

    it('Expected "seven hundred nineteen" when argument is 719 (number)', function() {
      assert.equal(getReadableNumber(719), 'seven hundred nineteen');
    });

    it('Expected "seven hundred ninety nine" when argument is 799 (number)', function() {
      assert.equal(getReadableNumber(799), 'seven hundred ninety nine');
    });

    it('Expected "eight hundred" when argument is 800 (number)', function() {
      assert.equal(getReadableNumber(800), 'eight hundred');
    });

    it('Expected "eight hundred one" when argument is 801 (number)', function() {
      assert.equal(getReadableNumber(801), 'eight hundred one');
    });

    it('Expected "eight hundred nineteen" when argument is 819 (number)', function() {
      assert.equal(getReadableNumber(819), 'eight hundred nineteen');
    });

    it('Expected "eight hundred ninety nine" when argument is 899 (number)', function() {
      assert.equal(getReadableNumber(899), 'eight hundred ninety nine');
    });

    it('Expected "nine hundred" when argument is 900 (number)', function() {
      assert.equal(getReadableNumber(900), 'nine hundred');
    });

    it('Expected "nine hundred one" when argument is 901 (number)', function() {
      assert.equal(getReadableNumber(901), 'nine hundred one');
    });

    it('Expected "nine hundred nineteen" when argument is 919 (number)', function() {
      assert.equal(getReadableNumber(919), 'nine hundred nineteen');
    });

    it('Expected "nine hundred ninety nine" when argument is 999 (number)', function() {
      assert.equal(getReadableNumber(999), 'nine hundred ninety nine');
    });
   
    it('Expected "one" when arguments are more than one, and the first argument is 1 (number)', function() {
      assert.equal(getReadableNumber(1, 5), 'one');
    });

  });

  describe('Positive tests: strings', function() {
    it('Expected "six hundred sixteen" when argument is "616" (string)', function() {
      assert.equal(getReadableNumber('616'), 'six hundred sixteen');
    });

    it('Expected "seven hundred seventy" when argument is "   770   " (string with whitespaces around — test trim function)', function() {
      assert.equal(getReadableNumber('   770   '), 'seven hundred seventy');
    });

    it('Expected "one hundred twenty three" when argument is "123 \\n" (string with whitespaces and LF — test trim function)', function() {
      assert.equal(getReadableNumber('123 \n'), 'one hundred twenty three');
    });

    it('Expected "three hundred twenty one" when argument is "321 \\n\\r" (string with whitespaces and CRLF — test trim function)', function() {
      assert.equal(getReadableNumber('321 \n\r'), 'three hundred twenty one');
    });

  });

  describe('Negative tests: invalid input value', function() {
    it('Expected undefined when argument is undefined', function() {
      assert.equal(getReadableNumber(undefined), undefined);
    });
    
    it('Expected undefined when argument is NaN', function() {
      assert.equal(getReadableNumber(NaN), undefined);
    });
    
    it('Expected undefined when argument is null', function() {
      assert.equal(getReadableNumber(null), undefined);
    });
    
    it('Expected undefined when argument is "" (empty line)', function() {
      assert.equal(getReadableNumber(''), undefined);
    });

    it('Expected undefined when argument is "zero"', function() {
      assert.equal(getReadableNumber('zero'), undefined);
    });

    it('Expected undefined when argument is [] (empty array)', function() {
      assert.equal(getReadableNumber([]), undefined);
    });

    it('Expected undefined when argument is {} (empty object)', function() {
      assert.equal(getReadableNumber({}), undefined);
    });

    it('Value 1000 is out of range. Expected output is undefined', function() {
      assert.equal(getReadableNumber(1000), undefined);
    });

    it('Number -1 is out of range. Expected output is undefined', function() {
      assert.equal(getReadableNumber(-1), undefined);
    });

    it('String "-1" is out of range. Expected output is undefined', function() {
      assert.equal(getReadableNumber("-1"), undefined);
    });

    it('Fractional number 1.555 is invalid. Expected output is undefined', function() {
      assert.equal(getReadableNumber(1.555), undefined);
    });

    it('Expected undefined when there are no arguments', function() {
      assert.equal(getReadableNumber(), undefined);
    });
   
  });

});
