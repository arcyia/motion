// transition
export const lbkTransition = {
    lbkSpring: {
        ease: [0, 0.8, 0.4, 1.3],
        duration: 0.3,
    },
    lbkEase: { ease: [0, 0.8, 0.4, 1], duration: 0.3 },
    lbkExit: {
        ease: [0, 0.8, 0.4, 1],
        duration: 0.2,
    },
}

// Animation
export const lbkAnimation = {
    // Item
    itemInitial: {
        opacity: 0,
        y: 8,
        transition: lbkTransition.lbkExit,
    },
    itemAppear: {
        opacity: 1,
        y: 0,
        delay: i * 0.1,
        transition: lbkTransition.lbkEase,
    },

    // Popover
    popInitial: {
        opacity: 0,
        y: -8,
        rotateX: -6,
        transition: lbkTransition.lbkExit,
    },
    popAppear: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: lbkTransition.lbkSpring,
    },
}
