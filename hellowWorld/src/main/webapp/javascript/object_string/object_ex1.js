//object_ex1.js

//클래스 Estimate. 속성 : 재료, 단가 : 재료와 부피 => 총금액.
class Estimate{
    constructor(param){
        this.unit = param;
    }
    //타입에 따른 리턴 메소드
    getEstimate(unitType, width, height){ //wood 20 20 => 100 * 20 * 20
        let priceInfo = this.unit.find(function(val) {
            return val.type == unitType;
        })
        return priceInfo.price * width * height;
    }
    //새로운 값 추가하고 싶을 때
    addUnit(unit){
        this.unit.push(unit);
    }
}

let unitInfo = [
    {type: 'wood', price: 100},
    {type: 'iron', price: 300},
    {type: 'plastic', price: 200}
]

let estmate = new Estimate(unitInfo);
let result = estmate.getEstimate('wood', 30, 50);

estmate.addUnit({type: 'ceramic', price: 400});
result = estmate.getEstimate('ceramic', 10, 20);

console.log(`계산값은 ${result}`);
// console.log(estmate.unit);