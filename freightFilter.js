function scanAndFilter(freightItems, forbiddenString) {
    // This is an array variable you can override with your filtered array
    let filteredItems = [];

    freightItems.filter(function(item) {
        if (item !== forbiddenString) {
            filteredItems.push(item)
        }
    })
  
    return filteredItems;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const filtered = scanAndFilter(
    ['dog', 'ray gun', 'cat', 'zippers', 'ray gun'],
    'ray gun'
  );
  console.log('Filtered Items');
  console.log(filtered); // should be ['dog', 'cat', 'zippers']