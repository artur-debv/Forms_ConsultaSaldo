export function InputField({ id, type, placeholder }) {
    return (
        <div>
            <label htmlFor={id} className="sr-only">{placeholder}</label>
            <input
                name={id}
                type={type}
                required
                className="appearance-none mb-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                placeholder={placeholder}
            />
        </div>
    );
}