import { Plane } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Pic({ image, position, size }) {
    const planeRef = useRef(null)

    useFrame(({ camera }) => {
        if (planeRef.current) {
            planeRef.current.lookAt(camera.position)
        }
    })

    const width = image.image.width / 750 * size
    const height = image.image.height / 750 * size

    return (
        <Plane args={[ width, height ]} position={position} ref={planeRef}>
            <meshBasicMaterial map={image} />
        </Plane>
    )
}