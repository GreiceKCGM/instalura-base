

export function propToStyle(propName) {
   
    return function(props) {

        const propValue = props[propName];

        if(typeof propValue === 'string'){
            return  {
            
                [propName]: propValue
            }
        }
        if(typeof propValue === 'object'){
            

        }
        
         
    }
}