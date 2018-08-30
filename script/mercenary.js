//一个雇佣兵
function mc() {
    this.describe = {
        name:'',
        age:'',
    }
    this.attribute = {
        力量: 100,
        反应力: 100,
        强度: 1, //护甲值*强度
        精神: 10,//精神力 
        耐力: 20,// 行动力<== 力量*0.2 + 耐力*3   行走和攻击消耗耐力、可用的行动力会扣除负重
        五行: '',
    } 
    this.dashboad = {
        精神力: this.attribute.精神 * 2,
        行动力: this.attribute.耐力 * 2 + this.attribute.力量 * 0.4 - this.dashboad.负重,
        负重: 10,
        武器: '',
        携带: [],
        熟练度: '',
        职业:'',
        薪水:'',
    }
    this.weapen = {

    }
    this.skill = {

    }
    this.status = {
        
    }
    console.log('i‘m '+this.attribute.name+' age:'+ this.attribute.age)
    console.log(this.attribute)
}
module.exports = mc