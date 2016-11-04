# colourClassifier
Simple JavaScript function for classifying colours!

# how to use
To use the function, you need to have an input hexadecimal value ready(like `#FF0000`) and a classifier array with hexadecimal values in the same format as the input colour. Now call `classifyColour(inputColour,classifiers)` in your code to return what colour in the classifier array is closest to the input colour.

# how does it work?
All it does is it goes through every colour provided in the classifiers array, and compares each one to the input colour. The difference is calculated per part of the colours, so the red value of the classifier is compared to the red value of the input. The total difference is calculated by adding up the differences together and returning that sum.

What the function returns has the lowest difference compared to the input colour with the method described above.
