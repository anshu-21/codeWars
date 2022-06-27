/********************
 * 
 * Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
 * 
 */

//S1
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//S2
function DNAtoRNA(dna) {
  var hold = "";
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] == "T") {
      hold += "U";
    } else {
      hold += dna[i];
    }
  }
  return hold;
}

//S3
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}
