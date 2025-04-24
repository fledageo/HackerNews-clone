const url = "http://localhost:5000/api"
export async function userRegistration(user) {
    try {
        const response = await fetch(`${url}/auth/registration`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",  
            },
            body: JSON.stringify(user)
        })
        const data = await response.json()
        return data
    } catch (err) {
        cosnole.log(err)
    }
}

export async function userLogin(user) {
    try {
        const response = await fetch(`${url}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(user)
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function verifyAuth() {
    try {
        const response = await fetch(`${url}/auth/verify`, {
            method: "GET",
            credentials: "include",
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}


export async function getUserById(id) {
    try {
        const response = await fetch(`${url}/auth/user/${id}`, {
            method: "GET",
            credentials: "include",
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}