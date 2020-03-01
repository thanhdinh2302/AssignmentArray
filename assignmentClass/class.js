//Nhap ten SV
let soLuongSV = Number(prompt("Nhap so luong sinh vien trong lop:"));
let n = [];
console.log("STT-TenSV");
// In ten SV
for (let i = 0; i < soLuongSV; i++) {
    let name = prompt("Nhap ten sinh vien:");
    console.table(`${i+1}: ${name}`);
    n.push(name);
}
//Nhap STT va ten moi
let stt = Number(prompt("Nhap so thu tu ban muon sua:"));
while(stt < 1 || stt > soLuongSV){
    stt = parseInt(prompt("Nhap sai. Moi nhap lai"));
    
}

n[stt-1] = prompt("Nhap ten SV moi:");

for (let i = 0; i < n.length; i++) {
    console.table(`${i+1}: ${n[i]}`);
}

//kiem tra ten co trong mang khong va dem so ten trung
let isExist = false;
let checkName = prompt("Nhap ten ban muon kiem tra:");
let count = 0;
for (let i = 0; i < n.length; i++) {
    const element = n[i];
    if(element === checkName){
        isExist = true;
        count++;
    }
}
if(isExist){
    console.log("co ton tai");
    console.log(`Co ${count} nguoi trung ten.`);
    
}else{
    console.log("ko ton tai");
    
}

//in xuoi va in nguoc
n.sort();
for (let i = 0; i < n.length; i++) {
    console.table(`${i+1}: ${n[i]}`);
}

n.reverse();
for (let i = 0; i < n.length; i++) {
    console.table(`${i+1}: ${n[i]}`);
}
//Nhap chu cai va in ten co chu cai trung ten do
let alphabet = prompt("Nhap 1 chu cai:");
let dem = 0;
for (let i = 0; i < n.length; i++){
    if(n[i].search(alphabet) >= 0){
        dem++;
        console.log(`${dem}: ${n[i]}`);
    }
}