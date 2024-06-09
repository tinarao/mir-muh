interface Rect {
    x: number
    y: number
    w: number
    h: number
}

interface Velocity {
    xvel: number
    yvel: number
}

interface Pos {
    x: number,
    y: number,
    w: number,
    h: number
}


type Directions = "up" | "down" | "left" | "right"
type FacingDirections = "left" | "right"