
interface LabelProps {
    htmlFor: string; 
    text: string;   
    style?: React.CSSProperties; 
}

export function Label({ htmlFor, text, style }: LabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className='block text-sm mb-1'
            style={style}
        >
            {text}
        </label>
    );
}
