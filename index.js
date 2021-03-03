//Mixed Messages print's a message everytime the script is run randomly.
const mixedMessages = ['The Best Way To Get Started Is To Quit Talking And Begin Doing.', 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty',
'Don\’t Let Yesterday Take Up Too Much Of Today.', 'You Learn More From Failure Than From Success. Don\’t Let It Stop You. Failure Builds Character.',
'It\’s Not Whether You Get Knocked Down, It\’s Whether You Get Up.', 'If You Are Working On Something That You Really Care About, You Don\’t Have To Be Pushed. The Vision Pulls You.',
'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.'];

// Generating random index for mixedMessages arr.
const generateIndex = () =>
{
    let index = Math.floor(Math.random() * mixedMessages.length);
    return index;
};

// Method for printing the messages to the console with parameters of arr and a function for generating random index
const printMixedMessage = (arr, arrIndex) =>
{
    console.log(`${arr[arrIndex()]}`);
};

// Calling the Method to print the Messages in the mixedMessages Arr .
printMixedMessage(mixedMessages, generateIndex);