const start: number = new Date().getTime();

interface Position {
    x: number;
    y: number;
}

const originPosition: Position = { x: 0, y: 0 };

interface Last {
    starTimestamp: number;
    starPosition: Position;
    mousePosition: Position;
}

const last: Last = {
    starTimestamp: start,
    starPosition: originPosition,
    mousePosition: originPosition
}

interface Config {
    starAnimationDuration: number;
    minimumTimeBetweenStars: number;
    minimumDistanceBetweenStars: number;
    glowDuration: number;
    maximumGlowPointSpacing: number;
    colors: string[];
    sizes: string[];
    animations: string[];
}

const config: Config = {
    starAnimationDuration: 1500,
    minimumTimeBetweenStars: 250,
    minimumDistanceBetweenStars: 75,
    glowDuration: 75,
    maximumGlowPointSpacing: 10,
    colors: ["249 146 253", "252 254 255"],
    sizes: ["1.4rem", "1rem", "0.6rem"],
    animations: ["fall-1", "fall-2", "fall-3"]
}

let count: number = 0;

const rand = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min,
    selectRandom = (items: any[]): any => items[rand(0, items.length - 1)];

const withUnit = (value: number, unit: string): string => `${value}${unit}`,
    px = (value: number): string => withUnit(value, "px"),
    ms = (value: number): string => withUnit(value, "ms");

const calcDistance = (a: Position, b: Position): number => {
    const diffX: number = b.x - a.x,
        diffY: number = b.y - a.y;

    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
}

const calcElapsedTime = (start: number, end: number): number => end - start;

const appendElement = (element: HTMLElement) => document.body.appendChild(element);
const removeElement = (element: HTMLElement, delay: number) => setTimeout(() => document.body.removeChild(element), delay);

const createStar = (position: Position) => {
    const star: HTMLElement = document.createElement("span"),
        color: string = selectRandom(config.colors);

    star.className = "star fa-solid fa-sparkle";

    star.style.left = px(position.x);
    star.style.top = px(position.y);
    star.style.fontSize = selectRandom(config.sizes);
    star.style.color = `rgb(${color})`;
    star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
    star.style.animationName = config.animations[count++ % 3];
    star.style.animationDuration = ms(config.starAnimationDuration);

    appendElement(star);

    removeElement(star, config.starAnimationDuration);
}

const createGlowPoint = (position: Position) => {
    const glow: HTMLElement = document.createElement("div");

    glow.className = "glow-point";

    glow.style.left = px(position.x);
    glow.style.top = px(position.y);

    appendElement(glow)

    removeElement(glow, config.glowDuration);
}

const determinePointQuantity = (distance: number): number => Math.max(
    Math.floor(distance / config.maximumGlowPointSpacing),
    1
);

const createGlow = (last: Position, current: Position) => {
    const distance: number = calcDistance(last, current),
        quantity: number = determinePointQuantity(distance);

    const dx: number = (current.x - last.x) / quantity,
        dy: number = (current.y - last.y) / quantity;

    Array.from(Array(quantity)).forEach((_, index) => {
        const x: number = last.x + dx * index,
            y: number = last.y + dy * index;

        createGlowPoint({ x, y });
    });
}

const updateLastStar = (position: Position) => {
    last.starTimestamp = new Date().getTime();

    last.starPosition = position;
}

const updateLastMousePosition = (position: Position) => last.mousePosition = position;

const adjustLastMousePosition = (position: Position) => {
    if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
        last.mousePosition = position;
    }
};

const handleOnMove = (e: any) => {
    const mousePosition: Position = { x: (e as MouseEvent).clientX || 0, y: (e as MouseEvent).clientY || 0 }

    adjustLastMousePosition(mousePosition);

    const now: number = new Date().getTime(),
        hasMovedFarEnough: boolean = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars,
        hasBeenLongEnough: boolean = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;

    if (hasMovedFarEnough || hasBeenLongEnough) {
        createStar(mousePosition);

        updateLastStar(mousePosition);
    }

    createGlow(last.mousePosition, mousePosition);

    updateLastMousePosition(mousePosition);
}

window.onmousemove = (e: MouseEvent) => handleOnMove(e);

window.ontouchmove = (e: TouchEvent) => handleOnMove(e.touches ? e.touches[0] : e);


document.body.onmouseleave = () => updateLastMousePosition(originPosition);

