const even = require('is-even');
try{
    console.log('~ even:', even(3));
}catch (error) {
    console.log('~ error:', error);
}