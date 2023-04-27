import { Html, Plane, Scroll, ScrollControls, useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import Ocean from './components/Ocean'
import SectionTitle from './components/SectionTitle'
import SiteTitle from './components/SiteTitle'
import Sign from './components/Sign'
import { useRef } from 'react'
import Pic from './components/Pic'

export default function Scene() {

    const { width, height } = useThree((state) => state.viewport)

    /* General purpose controls, attach to whatever for adjustment */
    const { position, rotation } = useControls({
        position: [ 0, 0, 0 ],
        rotation: [ 0, 0, 0 ],
    })

    /* Camera position if needed */
    // const { position } = useThree((state) => state.camera)
    // const { camera } = useThree((state) => state)
    // console.log('camPos', position)

    /* makes sure 'About' section title is never in view until scrolled */
    const conditionalWidth = width < 5 ? width : width * 0.6

    /* makes site title responsive to device width */
    const siteTitlePos = [
        -0.35,
        -0.2, 
        width < 9 ? width * .5 : 4.5
    ]


    const texture = useTexture('./images/galaxy-generator.png')

    return (
        <>
            {/* <OrbitControls makeDefault /> */}
            {/* <Perf position='top-left' /> */}

            <Ocean />
            <SiteTitle text='0xJosiah' navTo='/' position={siteTitlePos} rotation={[ 0, 1, 0.09 ]} />
            {/* <Sign text='CONTACT' navTo='/contact' /> */}

            <ScrollControls pages={6} infinite horizontal>
                <Scroll>

                    <SectionTitle text='BEGINNINGS' navTo='/about' position={[ conditionalWidth, 2, 2 ]}>
                        {/* <Plane args={[picWidth, picHeight]} position={[ -1, -1, 1 ]} ref={planeRef}>
                            <meshBasicMaterial map={texture} />
                        </Plane> */}
                        <Pic image={texture} position={[ -0.04, -0.92, 0.86 ]} size={1.2}/>
                        <Pic image={texture} position={[ -0.04, -.2, -1.86 ]} size={1.2}/>
                        <Pic image={texture} position={[ 4, -1.2, -0.045 ]} size={1.2}/>
                    </SectionTitle>
                    

                    <SectionTitle text='COLLEGE' navTo='/experience' position={[ width * 2, 2, 2 ]}>
                        <Pic image={texture} position={[ -0.04, -0.92, 0.86 ]} size={1.2}/>
                        <Pic image={texture} position={[ -0.04, -.2, -1.86 ]} size={1.2}/>
                        <Pic image={texture} position={[ 4, -1.2, -0.045 ]} size={1.2}/>
                    </SectionTitle>
                    
                    <SectionTitle text='POST GRAD' navTo='/projects' position={[ width * 3, 2, 2 ]}>
                        <Pic image={texture} position={[ -0.04, -0.92, 0.86 ]} size={1.2}/>
                        <Pic image={texture} position={[ -0.04, -.2, -1.86 ]} size={1.2}/>
                        <Pic image={texture} position={[ 4, -1.2, -0.045 ]} size={1.2}/>
                    </SectionTitle>

                </Scroll>
            </ScrollControls>
        </>
    )
}