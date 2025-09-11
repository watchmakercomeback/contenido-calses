// Data structures and arrays in TypeScript

//1. Invert a string
function invertString(str: string): string {
    return str.split('').reverse().join('');
}

console.log(invertString("hello")); // Output: "olleh"

//2. Verify that a math expression has balanced parentheses 

function isBalanced(expression: string): boolean {
    const stack: string[] = [];
    const pairs: { [key: string]: string } = { '(': ')', '{': '}', '[': ']' };

    for (const char of expression) {
        if (pairs[char]) {
            stack.push(char);
        } else if (Object.values(pairs).includes(char)) {
            const last = stack.pop();
            if (pairs[last!] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isBalanced("{[()]}"));

//3. Print queue
function printQueue() {
    const queue: string[] = [];

    return {
        addDocument: (doc: string) => {
            queue.push(doc);
            console.log(`Document "${doc}" added to the queue.`);
        },
        printDocument: () => {
            if (queue.length === 0) {
                console.log("No documents to print.");
                return;
            }
            const doc = queue.shift();
            console.log(`Printing document: "${doc}"`);
        },
        countDocuments: () => {
            console.log(`There are ${queue.length} documents in the queue.`);
        }
    };
}

const myPrintQueue = printQueue();
myPrintQueue.addDocument("Doc1");
myPrintQueue.addDocument("Doc2");
myPrintQueue.countDocuments();
myPrintQueue.printDocument();
myPrintQueue.countDocuments();

//4. First letter that does not repeat
function firstNonRepeatingChar(str: string): string | null {
    const charCount: { [key: string]: number } = {};

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeatingChar("swiss")); // Output: "w"

//5. Delete duplicates from an array
function removeDuplicates(arr: number[]): number[] {
    return Array.from(new Set(arr));
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

//6. Rotate an array
function rotateArray(arr: number[], k: number): number[] {
    const n = arr.length;
    k = k % n; // Handle cases where k is greater than array length
    return arr.slice(-k).concat(arr.slice(0, n - k));
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

//7. Browser history with visit(url), back(), forward()
function createBrowserHistory() {
    const history: string[] = [];
    let currentIndex = -1;

    return {
        visit: (url: string) => {
            history.splice(currentIndex + 1);   // Remove forward history 
        
        },
        back: () => {
            if (currentIndex > 0) {
                currentIndex--;
                console.log(`Navigated back to: ${history[currentIndex]}`);
            } else {
                console.log("No more history to go back.");
            }
        },
        forward: () => {
            if (currentIndex < history.length - 1) {
                currentIndex++;
                console.log(`Navigated forward to: ${history[currentIndex]}`);
            } else {
                console.log("No more history to go forward.");
            }
        }
    };
}

const browser = createBrowserHistory();
browser.visit("google.com");
browser.visit("github.com");
browser.back();
browser.forward();
browser.back();
browser.back();
browser.forward();
browser.forward();
browser.forward();

browser.visit("stackoverflow.com");
browser.back();
browser.forward();
browser.forward();

//8. Word count in a string
function wordCount(str: string): { [key: string]: number } {
    const words = str.match(/\b\w+\b/g);
    const count: { [key: string]: number } = {};

    if (words) {
        for (const word of words) {
            const lowerWord = word.toLowerCase();
            count[lowerWord] = (count[lowerWord] || 0) + 1;
        }
    }
    return count;
}

console.log(wordCount("Hello world! Hello everyone."));

//9. Group anagrams
function groupAnagrams(words: string[]): { [key: string]: string[] } {
    const anagrams: { [key: string]: string[] } = {};

    for (const word of words) {
        const sorted = word.split('').sort().join('');
        if (!anagrams[sorted]) {
            anagrams[sorted] = [];
        }
        anagrams[sorted].push(word);
    }
    return anagrams;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

//10. Task's priority queue
function createPriorityQueue() {
    const queue: { task: string; priority: number }[] = [];

    return {
        addTask: (task: string, priority: number) => {
            queue.push({ task, priority });
            queue.sort((a, b) => b.priority - a.priority);
            console.log(`Task "${task}" added with priority ${priority}.`);
        },
        getNextTask: () => {
            if (queue.length === 0) {
                console.log("No tasks in the queue.");
                return null;
            }
            const nextTask = queue.shift();
            console.log(`Next task: "${nextTask!.task}" with priority ${nextTask!.priority}.`);
            return nextTask;
        }
    };
}

const taskQueue = createPriorityQueue();
taskQueue.addTask("Low priority task", 1);
taskQueue.addTask("High priority task", 5);
taskQueue.addTask("Medium priority task", 3);
taskQueue.getNextTask();
taskQueue.getNextTask();
taskQueue.getNextTask();
taskQueue.getNextTask();

//11. Duplicate the value of each number in an array
    
