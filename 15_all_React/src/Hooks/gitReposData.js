import { useEffect, useState } from "react"

export const gitReposData = (username) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then((response) => response.json())
            .then((data) => setData(Array.isArray(data) ? data : []))
            .catch(() => setData([]))
    }, [username])

    return data
}
