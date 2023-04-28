import { Scroll, ScrollControls, useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import Ocean from './components/Ocean'
import SectionTitle from './components/SectionTitle'
import SiteTitle from './components/SiteTitle'
import { useRef } from 'react'
import Pic from './components/Pic'

export default function Scene() {

    const { width, height } = useThree((state) => state.viewport)

    /* General purpose controls, attach to whatever for adjustment */
    // const { position, rotation } = useControls({
    //     position: [ 0, 0, 0 ],
    //     rotation: [ 0, 0, 0 ],
    // })

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


    const [
        galaxyGenerator,
        baseballTeam,
        basketball,
        hsGrad,
        track,
        fireTube,
        paintProj,
        stadiumShot,
        buffsBball,
        skiCirc,
        skiAction,
        collegeGrad,
        denverSign,
        headShot,
        stonks,
        notStonks,
        skiGroup,
        celticsGame,
        bikeAspens,
        bikeFourteener,
        bikeDurango,
        muddyFace,
        bikeSubie,
        bikeGroupRet,
        miners,
        lounge,
        marbleCombine
    ] = useTexture([
        './images/galaxy-generator.png',
        './images/baseball-team.jpeg',
        './images/basketball.jpeg',
        './images/hsGrad.jpeg',
        './images/track.jpeg',
        './images/fireTube.jpeg',
        './images/paintProj.jpeg',
        './images/stadiumShot.jpeg',
        './images/buffsBball.jpeg',
        './images/skiCirc.jpeg',
        './images/skiAction.jpeg',
        './images/collegeGrad.jpeg',
        './images/denverSign.jpeg',
        './images/headShot.jpeg',
        './images/stonks.webp',
        './images/notStonks.jpeg',
        './images/skiGroup.jpeg',
        './images/celticsGame.jpeg',
        './images/bikeAspens.jpeg',
        './images/bikeFourteener.jpeg',
        './images/bikeDurango.jpeg',
        './images/muddyFace.jpeg',
        './images/bikeSubie.jpeg',
        './images/bikeGroupRet.jpeg',
        './images/miners.jpeg',
        './images/lounge.jpeg',
        './images/marble-combine.png',
    ])

    return (
        <>
            {/* <OrbitControls makeDefault /> */}
            {/* <Perf position='top-left' /> */}

            <Ocean />
            <SiteTitle text='0xJosiah' navTo='/' position={siteTitlePos} rotation={[ 0, 1, 0.09 ]} />
            {/* <Sign text='CONTACT' navTo='/contact' /> */}

            <ScrollControls pages={8} infinite horizontal>
                <Scroll>

                    <SectionTitle text='BEGINNINGS' navTo='/' position={[ conditionalWidth, 2, 2 ]}>
                        {/* <Plane args={[picWidth, picHeight]} position={[ -1, -1, 1 ]} ref={planeRef}>
                            <meshBasicMaterial map={texture} />
                        </Plane> */}
                        <Pic image={baseballTeam} position={[ -0.04, -0.92, 0.86 ]} size={1.2}/>
                        <Pic image={basketball} position={[ -0.04, -.2, -1.86 ]} size={1.2}/>
                        <Pic image={track} position={[ 4, -1.2, -0.045 ]} size={1.2}/>
                        <Pic image={fireTube} position={[ 5.5, -0.17, 0 ]} size={1.2}/>
                        <Pic image={hsGrad} position={[ 7, -0.75, 0.4 ]} size={1.2}/>
                    </SectionTitle>
                    

                    <SectionTitle text='COLLEGE' navTo='/' position={[ width * 2, 2, 2 ]}>
                        <Pic image={buffsBball} position={[ -0.04, -0.92, 0.86 ]} size={1.2}/>
                        <Pic image={stadiumShot} position={[ -0.04, -.2, -1.86 ]} size={1.2}/>
                        <Pic image={paintProj} position={[ 4, -1.2, -0.045 ]} size={1.2}/>
                        <Pic image={skiAction} position={[ 5.75, -1.07, -0.95 ]} size={1.2}/>
                        <Pic image={skiCirc} position={[ 5.5, -0.17, 0.5 ]} size={1.2}/>
                        <Pic image={collegeGrad} position={[ 7.97, -0.75, 0.4 ]} size={1.2}/>
                    </SectionTitle>

                    <SectionTitle text='POST GRAD' navTo='/' position={[ width * 3, 2, 2 ]}>
                        <Pic image={denverSign} position={[ -0.04, -0.92, 0.86 ]} size={1.2}/>
                        <Pic image={headShot} position={[ -0.04, -.2, -1.86 ]} size={1.2}/>
                        <Pic image={stonks} position={[ 4, -1.2, -0.045 ]} size={1.2}/>
                        <Pic image={celticsGame} position={[ 5.75, -1.07, -0.95 ]} size={1.2}/>
                        <Pic image={skiGroup} position={[ 5.5, -0.17, 0.5 ]} size={1.2}/>
                        {/* <Pic image={notStonks} position={[ 7.97, -0.75, 0.4 ]} size={1.2}/> */}
                    </SectionTitle>

                    <SectionTitle text='2020' navTo='/' position={[ width * 4, 2, 2 ]}>
                        <Pic image={notStonks} position={[ -0.04, -0.92, 0.86 ]} size={1.2}/>
                        <Pic image={bikeAspens} position={[ -0.04, -.2, -1.86 ]} size={1.2}/>
                        <Pic image={bikeFourteener} position={[ 4, -1.2, -0.045 ]} size={1.2}/>
                        <Pic image={bikeDurango} position={[ 5.75, -1.07, -0.95 ]} size={1.2}/>
                        <Pic image={muddyFace} position={[ 5.5, -0.17, 0.5 ]} size={1.2}/>
                    </SectionTitle>

                    <SectionTitle text='RETIREMENT' navTo='/projects' position={[ width * 5, 2, 2 ]}>
                        <Pic image={bikeSubie} position={[ -0.04, -0.92, 0.86 ]} size={1.2}/>
                        <Pic image={lounge} position={[ -0.04, -.2, -1.86 ]} size={1.2}/>
                        <Pic image={miners} position={[ 4, -1.2, -0.045 ]} size={1.2}/>
                        <Pic image={marbleCombine} position={[ 7.75, -1.07, -0.95 ]} size={1.2}/>
                        <Pic image={galaxyGenerator} position={[ 5.5, -0.17, 0.5 ]} size={1.2}/>
                    </SectionTitle>

                    <SectionTitle text='NEXT...' navTo='/' position={[ width * 6, 2, 2 ]}></SectionTitle>

                </Scroll>
            </ScrollControls>
        </>
    )
}