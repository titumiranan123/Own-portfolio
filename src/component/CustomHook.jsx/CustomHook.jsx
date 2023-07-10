import { useEffect, useState } from "react";

const useProject = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('Projects.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return data;
}
export default useProject;