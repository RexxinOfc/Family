let handler = async (m, { conn, text }) => {
  if (!text) throw false
  conn.reply(m.chat, `
Bot Dah On Tod, Jan Di Spam
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['test']
handler.tags = ['info']
handler.command = /^te(s|t)?$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

