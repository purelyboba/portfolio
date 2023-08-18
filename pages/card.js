import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

import styles from "../styles/Card.module.css";

export default function Card() {
    const obj = useLoader(GLTFLoader, "./cassette.glb");

    return(
        <div className={styles.scene}>
            <Canvas
                shadows
                camera={{
                    position: [-6, 7, 7],
                }}
            >
                    <primitive object={obj} />
            </Canvas>
        </div>
    );
}