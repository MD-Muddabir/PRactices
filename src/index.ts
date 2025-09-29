let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;

function greet(name: string): string {
    return 'Hello, ${name}!';
}

const message: string = greet("World");
console.log(message);
