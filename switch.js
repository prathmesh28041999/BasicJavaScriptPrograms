/**
 * else if statements are a great tool if we need to check multiple conditions. In programming, 
 * we often find ourselves needing to check multiple values and handling each of them differently. 
 * For example:
 */
let groceryItem='papaya';
switch (groceryItem) {
    case 'tomato':
      console.log('Tomatoes are $0.49');
      break;
    case 'lime':
      console.log('Limes are $1.49');
      break;
    case 'papaya':
      console.log('Papayas are $1.29');
      break;
    default:
      console.log('Invalid item');
      break;
  }
   
  // Prints 'Papayas are $1.29'