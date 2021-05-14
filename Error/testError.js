// function add(a,b){
//     if(typeof a !== 'string' || typeof b !== 'string'){
//         throw new Error('wrong type');  // hàm mới tạo error
//     }
//     return a + b ;
// };

// try {
//     var result = add('a', 1);
// } catch (error) {
//     console.error(error);
// }

// console.log('xxxx');

// cách 2
function reject(){
    return new Promise(function( resolve ,reject){
        reject( new Error('Promise error'));
    });
}
reject().catch(function(error){
    console.log('has error' , error.message);  // error.message dùng để xuất nội dung ra 
});

