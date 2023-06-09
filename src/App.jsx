import { Canvas } from '@react-three/fiber'
import AnimatedRoutes from './components/AnimatedRoutes'
import Scene from './Scene'
import useFullScreen from './hooks/useFullScreen'

const camConfig = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [ 4.25, .6, 7.75 ]
}


export default function App() {
    useFullScreen()

    return (
        <>
            <Canvas shadows camera={{...camConfig}}>
                <Scene />
            </Canvas>

            <AnimatedRoutes />
        </>
    )
}