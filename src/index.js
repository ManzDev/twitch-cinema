import "./components/BackgroundStreet.js";
import "./components/CinemaBuilding.js";
import "./components/CinemaQueue.js";
import "./components/PersonViewer.js";

const cinemaQueue = document.querySelector("cinema-queue");

const personList = new Set();

const client = new tmi.Client({
  channels: ["manzdev"]
});

client.connect();

client.on("message", (channel, tags, message, self) => {
  const username = tags.username;
  const color = tags.color || "#00000077";
  const isNewUser = message === "!ticket"; // message.startsWith("!ticket");
  const hasUser = personList.has(username);

  if (isNewUser && !hasUser) {
    const user = document.createElement("person-viewer");
    user.setAttribute("username", username);
    user.setAttribute("color", color);
    cinemaQueue.insertUser(user);
    personList.add(username);
  }
});
