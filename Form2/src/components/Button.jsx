export function Button({ type, children }) {
    return (
        <button
            type={type}
            className="w-full py-2 rounded-lg mt-4 text-sm font-normal"
            style={{
                backgroundColor: 'var(--primary-color)',
                color: 'var(--secondary-color)',
            }}
        >
            {children}
        </button>
    )
}