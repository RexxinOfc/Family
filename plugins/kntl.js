let handler = async (m, { conn, participants, command, text }) => {
    let who
    if (!m.isGroup) who = m.sender
    else {
        let member = participants.map(u => u.id)
        who = member[Math.floor(Math.random() * member.length)]
    }
    let jawab = `
Yang Terkontol Adalah @${who.replace(/@.+/, '')}
    `.trim()
    let saha = [who]
    let mentionedJid = saha.concat(m.mentionedJid)
    conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid } })
    conn.send3Button(m.chat, .trim(), wm, 'kembali ke menu', usedPrefix + 'menu', m)
}
handler.help = ['kontol']
handler.tags = ['kerang']
handler.command = /^kon(tol)?$/i

module.exports = handler