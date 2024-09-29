import One from './animation/One.json';
import Two from './animation/Two.json';
import Three from './animation/Three.json';

export const delivery = {
    loop: true,
    autoplay: true,
    animationData: One,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

export const Logo = {
    loop: true,
    autoplay: true,
    animationData: Two,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

export const FallBackImage = {
    loop: true,
    autoplay: true,
    animationData: Three,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}