
// switch case

const score = 1;

switch (true) {
    case (score >= 8):
        console.log("giỏi"); // true === true 
        break;
    case (score >= 6 && score < 8):
        console.log("khá");
        break;
    case (score >= 4 && score < 6):
        console.log("trung bình");
        break;
    default:
        console.log("yếu");
        break;
}
