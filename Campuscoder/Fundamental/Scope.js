// Blocked Scope Variabel

let tinggi = 8

if (tinggi > 5) {
    let lebar = 10
    console.log(lebar)
}

console.log(lebar) 
// variabel lebar tidak terbaca diluar dari blok if
/* let & const memiliki block scope, artinya hanya 
bisa diakses didalam block tempat ia di-assign */


// Lexical Scope

function lamarKerja(){
    
    // kita mendeklarasikan variable di luar scope orangDalam
    let jabatan = 'Programmer'
    function orangDalam(){
        
        // variable jabatan masih dapat kita akses di dalam function yang berbeda scope.
        let kenalan = `Orang dalam bisa memmasukkan ${jabatan}`
        console.log(kenalan)
    }
    orangDalam()
}
lamarKerja()

/* lexical scope artinya kita dapat mengakses variabel 
di dalam function yang diassign di scope function luarnya */ 