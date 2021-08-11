import React, { useState, useEffect, useRef } from 'react';
import { Canvas, extend, useFrame, useLoader } from 'react-three-fiber';
import {
    OrbitControls,
    Torus,
    Text,
    Sphere,
    Box,
    RoundedBox,
    shaderMaterial,
    Html,
} from '@react-three/drei';
import * as THREE from 'three';
import {
    EffectComposer,
    DepthOfField,
    Bloom,
    Noise,
    Vignette,
} from '@react-three/postprocessing';
import * as Icon from 'react-feather';
import { motion } from 'framer-motion';

// files
import './Main.scss';
import { BoxBufferGeometry, PlaneBufferGeometry } from 'three';

export default function () {
    const website = useRef();
    const [cameraPosition, setCameraPosition] = useState([0, 0, 50]);
    const [centerBlockY, setCenterBlockY] = useState(0);
    const navLinks = useRef();
    const edges = [useRef(), useRef(), useRef(), useRef()];
    const [isMobile, setIsMobile] = useState(false);
    const hamburger = useRef();

    function BlackCube() {
        const mesh = useRef();
        let xPos = 0;
        const offset = Math.floor(Math.random() * 2);

        useFrame(() => {
            xPos += 0.008;
            mesh.current.position.z = Math.sin(xPos + offset) * 30;
        });

        return (
            <RoundedBox
                ref={mesh}
                args={[1, 1, 1]}
                smoothness={5}
                radius={0.2}
                position={[
                    (Math.random() - 0.5) * 100,
                    (Math.random() - 0.5) * 100,
                    0,
                ]}
                rotation={[0, 0, 0]}
            >
                <meshBasicMaterial color="red" />
            </RoundedBox>
        );
    }

    function AddStar() {
        const mesh = useRef();

        const position = Array(3)
            .fill()
            .map(() => {
                return (Math.random() - 0.5) * 500;
            });

        return (
            <Sphere ref={mesh} position={position} args={[0.2]}>
                <meshBasicMaterial />
            </Sphere>
        );
    }

    function RotatingRing(props) {
        const mesh = useRef();

        useFrame((state, delta) => {
            mesh.current.rotation.x += 0.005;
            mesh.current.rotation.y += 0.005;
        });

        return (
            <Torus ref={mesh} {...props}>
                <meshStandardMaterial {...props} />
            </Torus>
        );
    }

    function onScroll(e) {
        const t = website.current.scrollTop;

        const camera = cameraPosition;

        // setCenterBlockY(700 - t <= 0 ? 0 : 700 - t);

        camera[2] = 0.2 * t + 50;

        setCameraPosition(camera);
    }

    function MovingCamera() {
        useFrame(({ clock, camera }) => {
            camera.position.x = cameraPosition[0];
            camera.position.y = cameraPosition[1];
            camera.position.z = cameraPosition[2];
        });

        return null;
    }

    useEffect(() => {
        website.current.onscroll = (e) => {
            e.preventDefault();
            onScroll(e);
        };
    });

    document.body.onmousemove = (e) => {
        if (!isMobile) {
            const mouse = {
                x: e.clientX,
                y: e.clientY,
            };
            const camera = cameraPosition;

            camera[1] = 0.001 + (mouse.y - window.innerHeight / 2) / 100;
            camera[0] = 0.001 + (mouse.x - window.innerWidth / 2) / 100;

            setCameraPosition(camera);
        }
    };

    function Div3d(props) {
        return (
            <RoundedBox {...props}>
                <meshBasicMaterial {...props} />
            </RoundedBox>
        );
    }

    function Scene() {
        return (
            <Canvas
                style={{
                    background: 'black',
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                }}
                camera={{ position: cameraPosition }}
            >
                <ambientLight intensity={0.1} />
                <pointLight position={[40, 40, 0]} />
                <MovingCamera />
                <RotatingRing
                    wireframe
                    args={[15, 6, 20, 20]}
                    color="#964dff"
                />
                <Text color="white" fontSize={20} position={[0, 30, 180]}>
                    ABOUT
                </Text>

                <Text color="black" fontSize={4} position={[0, 5, 181]}>
                    YOOOOO
                </Text>
                <Div3d
                    position={[-35, -10, 180]}
                    radius={1}
                    color="white"
                    args={[30, 50, 2]}
                />
                <Div3d
                    position={[0, -10, 180]}
                    radius={1}
                    color="white"
                    args={[30, 50, 2]}
                />
                <Div3d
                    position={[35, -10, 180]}
                    color="white"
                    radius={1}
                    args={[30, 50, 2]}
                />
                {Array(800).fill().map(AddStar)}
                <EffectComposer>
                    <Vignette eskil={false} offset={0.2} darkness={1.1} />
                    <Noise opacity={0.2} />
                    {/* <Bloom
                        luminanceThreshold={0}
                        luminanceSmoothing={0.8}
                        height={4000}
                    /> */}
                </EffectComposer>
            </Canvas>
        );
    }

    function hamburgerMenuHandler() {
        navLinks.current.classList.toggle('open');
        hamburger.current.classList.toggle('open');
    }

    function linkHover(e) {
        console.log(Number(e.target.id) - 1);
        console.log(Number(e.target.id));
        console.log('id:');
        console.log(console.log(e.target.id));

        edges[Number(e.target.id) - 1].current.style.borderBottomRightRadius =
            '100px';
        edges[Number(e.target.id)].current.style.borderTopRightRadius = '100px';
    }

    function roundingHambugerSideMenu() {
        for (let i = 0; i < edges.length; i++) {
            const link = edges[i];

            if (i === 0) {
                link.current.style.borderBottomRightRadius = '30px';
            } else if (i === edges.length - 1) {
                link.current.style.borderTopRightRadius = '30px';
            } else {
                link.current.style.borderTopRightRadius = '30px';
                link.current.style.borderBottomRightRadius = '30px';
            }
        }
    }

    useEffect(() => {
        console.log(window.innerWidth);
        console.log(window.innerWidth < 768);
        if (window.innerWidth < 768) {
            setIsMobile(true);
        }
        roundingHambugerSideMenu();
    }, []);

    return (
        <>
            <Scene />
            <div ref={website} className="website">
                <button className="more-button" onClick={hamburgerMenuHandler}>
                    <div ref={hamburger} className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </button>
                <ul className="nav-links" ref={navLinks}>
                    <div
                        className="round-edge-container"
                        style={{ marginTop: '15%' }}
                    >
                        <div ref={edges[0]} className="round-edge"></div>
                    </div>
                    <a
                        href="#"
                        onMouseOver={linkHover}
                        onMouseOut={roundingHambugerSideMenu}
                    >
                        <li id="1">
                            <p
                                id="1"
                                onMouseOver={linkHover}
                                onMouseOut={roundingHambugerSideMenu}
                            >
                                About
                            </p>
                        </li>
                    </a>
                    <div className="round-edge-container">
                        <div ref={edges[1]} className="round-edge"></div>
                    </div>
                    <a
                        href="#"
                        onMouseOver={linkHover}
                        onMouseOut={roundingHambugerSideMenu}
                    >
                        <li
                            id="2"
                            onMouseOver={linkHover}
                            onMouseOut={roundingHambugerSideMenu}
                        >
                            <p id="2">Contact</p>
                        </li>
                    </a>
                    <div className="round-edge-container">
                        <div ref={edges[2]} className="round-edge"></div>
                    </div>
                    <a
                        href="#"
                        onMouseOver={linkHover}
                        onMouseOut={roundingHambugerSideMenu}
                    >
                        <li id="3">
                            <p
                                id="3"
                                onMouseOver={linkHover}
                                onMouseOut={roundingHambugerSideMenu}
                            >
                                Projects
                            </p>
                        </li>
                    </a>
                    <div className="round-edge-container">
                        <div ref={edges[3]} className="round-edge"></div>
                    </div>
                </ul>
                <div className="title-container">
                    <p style={{}} className="title">
                        ITAI HAMMER.
                    </p>
                    <p style={{}} className="description">
                        Programmer • Designer • 3D Artist • Photographer
                    </p>
                </div>
                <div className="empty"></div>
            </div>
        </>
    );
}
