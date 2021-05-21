const mammal = {
  vertebrate: true,
  earBones: 3
  };

const rabbit = Object.create(mammal);

console.log(rabbit.vertebrate);  // true

console.log(rabbit.earBones);  // 3
