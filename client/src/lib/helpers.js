export const calcTimestamp = (createdAt) => {
    const calc = Date.now() - new Date(createdAt).getTime()
    const minutes = Math.floor(calc / 1000 / 60)

    if (minutes > 59) {
        const hours = Math.floor(minutes / 60)
        if (hours > 23) {
            const days = Math.floor(hours / 24)
            return days > 1 ? `${days} days ago` : `${days} day ago`
        }
        return hours > 1 ? `${hours} hours ago` : `${hours} hour ago`
    }
    return minutes > 1 ? `${minutes} minutes ago` : `${minutes} minute ago`
}