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


export async function logoutUser() {
    try {
        const response = await fetch(`${url}/auth/logout`, {
            method:"GET",
            credentials: "include"
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function getUserById(id) {
    try {
        const response = await fetch(`${url}/user/get/${id}`, {
            method: "GET",
            credentials: "include",
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}


export async function updateUser(updatedInfo){
    try {
        const response = await fetch(`${url}/user/update`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedInfo),
            credentials:"include"
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function addPost(post){
    try {
        const response = await fetch(`${url}/post/add`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(post)
        })

        return response.json()
    } catch (error) {
        console.log(error)
    }
}


export async function getNewestPosts(){
    try {
        const response = await fetch(`${url}/post/get/newest`)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}
export async function getPostById(id){
    try {
        const response = await fetch(`${url}/post/get/${id}`)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}



