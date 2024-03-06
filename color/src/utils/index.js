export function GetRandomColor(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
};