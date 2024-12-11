module.exports = {
 config: {
	 name: "bayjid",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "Hussain") {
 return message.reply({
 body: " 「❥︎----ღ᭄_ᴬˢˢᴬᴸᴬᴹᴼᴸᴬᴵᴷᵁᴹ ..\n❥︎----ღ᭄_  ᴮᴿᴼᵀᴴᴱᴿ❞࿐.🌴.\n❥ 𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐀𝐇𝐌𝐄𝐃\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 𝐇𝐔𝐒𝐒𝐀𝐈𝐍」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/XlyIOMR.mp4")
 });
 }
 }
}
