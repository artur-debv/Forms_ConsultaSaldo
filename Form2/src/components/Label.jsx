export function Label({ htmlFor, text, style }) {
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