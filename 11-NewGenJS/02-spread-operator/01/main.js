const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const mix = [...nums1, ...nums2];
console.log(mix);

const addmix = [5, ...nums1,-6,-1, ...nums2];
console.log(addmix)

function sumAdmin(addmix){

    return addmix.reduce( (acc,item) => acc+item,0);
}

console.log(`total : ${sumAdmin(addmix)}`);