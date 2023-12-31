export const findScore = (x, y) => {
    if (Number.isNaN(Number(x)) || Number.isNaN(Number(y))) return null;

    const distanceToDart = Math.sqrt((x * x) + (y * y));

    // distance to target
    if(distanceToDart > 10) return 0;
    if(distanceToDart > 5) return 1;
    if(distanceToDart > 1) return 5;
    return 10;
}