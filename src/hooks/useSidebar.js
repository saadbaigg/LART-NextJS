import { useState } from "react"

const useSidebar = (startActive) => {
    const [active, setActive] = useState(startActive)

    const toggleSidebar = () => {
        setActive(current => !current)
    }

    return [active, toggleSidebar]
}

export default useSidebar