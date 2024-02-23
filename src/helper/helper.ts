const colors = ["red-100", "green-100", "blue-100", "yellow-100", "orange-100", "purple-100", "pink-100" , "cyan-300"];

function randomChooser() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
let cache : any= {}
export const getColourForTags = () => {

    return (tag: string) => {
        if(tag in cache){

            return cache[tag];
        }else{
            let color = randomChooser()
            cache[tag] = color
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