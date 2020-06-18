String.prototype.adaptNum = function (i) {
    // REGEX pattern for order number: \d{3}-\d{7}\-\d{7}/g

    const regex = /\d{3}-/; // Erases first block
    var tmp = this.replace(regex,''); // Erases first block
    const regex2 = /-/g; 
    tmp = tmp.replace(regex2,''); // Erases -
    return tmp;

}

console.log("Insert order number:");


process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    //console.log(" "); 
  let chunk;
  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(chunk.adaptNum())
    //console.log("Insert order number:");
  }
  //console.log(" "); 
});

console.log(" "); 
process.stdin.on('end', () => {
  process.stdout.write('end');
});

