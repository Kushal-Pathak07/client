export const faceEmojis = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😛",
    "😜",
    "😝",
    "🤑",
    "🤗",
    "🤓",
    "😎",
    "🤠",
    "😏",
    "😒"
  ];
  
  export const getRandomEmoji = () => {
	return faceEmojis[Math.floor(Math.random() * faceEmojis.length)];
};