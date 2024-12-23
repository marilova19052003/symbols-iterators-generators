import Character from "./character.js"; // Импортируем класс Character
import Team from "./team.js"; // Импортируем класс Team

const team = new Team();
const bowman = new Character("Лучник", "Bowman", 50, 1, 40, 10);
const swordsman = new Character("Мечник", "Swordsman", 60, 1, 50, 20);

team.add(bowman);
team.add(swordsman);

// Перебор команды и вывод информации о каждом персонаже
for (const member of team) {
  console.log(member);
}
