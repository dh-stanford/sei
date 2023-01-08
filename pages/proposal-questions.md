---
permalink: /proposal-questions.html
title: "Proposal Questions"
date: 2022-11-30
layout: "layouts/post.njk"
---

Type of information needed when reviewing script proposals and general background on Unicode and Unicode proposals.

The script proposals aim to cover the characters used in a given script. A "character" is an abstraction (i.e., Latin lowercase letter "a"), which has various surface forms, or "glyphs" (i.e., the cursive "a" differs from that found in Times New Roman, but both are understood as "a" and are contrasted with a "b"). Unicode encodes just characters but information on glyphs is important to note in the documentation, particularly as a single character can have various contextual glyphs. All of these detailed issues are discussed on the [Unicode web site](http://www.unicode.org/) and in the [Unicode Standard](http://www.unicode.org/book/aboutbook.html) itself.

The Unicode web site hosts a number of examples of proposals that have been recently accepted. These can help give reviewers a flavor of what is considered a complete proposal. If you wish to view such examples to help in your review, please send us a request and we can point you to one or more good examples.
 

* Are all the characters covered? Are there any missing?

  * NOTE 1: The charts should cover all the letters/syllabic signs, numbers, and punctuation marks that are not already covered by Unicode. If you are unsure whether a particular letter is already in Unicode, note the name, discuss its use, and provide an image, if possible.

  * NOTE 2: Information on the variants of character should be noted.

  * NOTE 3: Ligatures and precomposed characters (character + combining diacritic) will not be included in Unicode, but such information is useful so that fonts can be created. This information too can be included in the documentation.

* Information on contextual forms is needed for each character, if applicable (i.e., a Xerox or preferably a scanned image showing how the glyph appears in various positions). Which characters have different shapes depending upon position (initial / medial / final)?

* Information on the joining classes of the letters is also needed, if applicable (i.e., which letters connect to their neighbors and in what manner, with Xeroxes or scanned images).

* Information on line-breaking properties is also necessary: can a line-break occur before or after the letter? For example, in English the dollar sign is not to be separated from the following number by a line-break. In the combination "$10", a "$" cannot appear at the line-end, with "10" on the next.

* Are the visual representations ("glyphs") on the chart representative?

* Are the names of the characters satisfactory?

* Does the script use any special symbols as numerals? If yes, list all necessary characters. Are any of the alphabetic characters used as numerals? How? Any additional supporting marks needed?

* Are there any special symbols analogous to ampersand, percent?

* Are there special symbols for literary use: verse sign, page mark, end of paragraph, end of text, etc. Are there any religious symbols?

* Are all the necessary combining marks listed?
 
  * NOTE: Some may already be covered elsewhere in Unicode, but I can help check this.

* Languages: Please list any other requirements of languages that use the script.

* Which characters have glyphs that fall below the baseline?

* What ligatures are needed? (This information is helpful for font developers.)