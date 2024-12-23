import Character from "./character.js"; // Импортируем класс Character

class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    if (character instanceof Character) {
      // Проверяем, что добавляемый объект - это Character
      this.members.push(character);
    } else {
      throw new Error("Only instances of Character can be added to the team.");
    }
  }

  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}

export default Team; // Экспортируем класс для использования в других файлах
