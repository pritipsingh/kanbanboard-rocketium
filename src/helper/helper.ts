const colors = ['bg-red-100', 'bg-green-100', 'bg-blue-100', 'bg-yellow-100', 
'bg-orange-100', 'bg-purple-100', 'bg-pink-100', 'bg-cyan-300'];

function randomChooser() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
let cache : Record<string, string>= {}
export const getColourForTags = () => {

    return (tag: string) => {
        if(tag.toLowerCase() in cache){

            return cache[tag.toLowerCase()];
        }else{
            let color = randomChooser()
            cache[tag.toLowerCase()] = color
            return color;
        }
    }

    
}


// export function debounce(func: (arg0: any) => void, wait: number | undefined) {
//     let timeout: string | number | NodeJS.Timeout | undefined;
  
//     return function executedFunction(...args: any[]) {
//       const later = () => {
//         clearTimeout(timeout);
//         func(...args);
//       };
  
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//     };
//   }