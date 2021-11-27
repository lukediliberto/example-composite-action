var msg = 'Hello World from javascript';
console.log(msg);
const ignore = require('@balena/dockerignore')
const ig = ignore().add(['*/temp*'])
// f = zgitignore.ZgitIgnore(["*/temp*"], docker = True)

// assert f.is_ignored("/somedir/temp")
// assert f.is_ignored("/somedir/temporary.txt")
// assert f.is_ignored("/somedir/temp/afile.txt")

const paths = [
    'somedir/temporary.txt',    // filtered out
    'somedir/temp',   // included
    'somedir/temp/athing.txt',
    'somedir/ano/hjhjh/temporary.txt',    // filtered out

]

console.log(ig.ignores("somedir/temporary.txt"))
console.log(ig.ignores("somedir/temp")) // true
console.log(ig.ignores("somedir/temp/afile.txt")) // true

//  is excluded, as is the directory /somedir/temp.