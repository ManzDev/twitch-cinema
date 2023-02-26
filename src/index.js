import "./components/CinemaBuilding.js";
import "./components/PersonViewer.js";
import "./components/CinemaTicket.js";

const container = document.querySelector(".container");
const cinemaQueue = document.querySelector(".cinema-queue");

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
    cinemaQueue.insertAdjacentElement("beforeend", user);
    personList.add(username);
  }
});
