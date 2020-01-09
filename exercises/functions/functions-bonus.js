/**
 * Callback Function
 * ======================
 * A function can be passed into other function as a parameter
 *
 * Resolve below error
 */

const g = () => {
    return 9.81;
};
const displacement = (getAcceleration) => {
    const velocity = 5;
    const time = 3.0;
    return velocity * time + 0.5 * getAcceleration() * (time ** 2)
}

console.log(`The displacement with a time period 3.0s is ${displacement()}`)

