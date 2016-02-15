/**
 * Created by jonassimonsen on 15/02/2016.
 */
var result = 0

for (var i = 2; i < process.argv.length; i++)
    result += Number(process.argv[i])

console.log(result)
