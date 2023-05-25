const animals = [
  {
    name: "cat",
    sound: "meow",
    feedrequirment: {
      food: 2,
      water: 4
    }
  },
  { name: "dog", sound: "woof" }
];

function useanimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}
export default animals;
export { useanimals };
