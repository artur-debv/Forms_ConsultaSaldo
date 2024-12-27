

type ErrorMessageProps = {
  errors: Record<string, any>; // Objeto de erros gerado pelo Zod
  name: string; // Nome do campo para exibir o erro
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ errors, name }) => {
  const existError = errors && Object.keys(errors).includes(name);

  return (
    <>
      {existError && (
        <div
          style={{ marginBottom: '16px' }}
          aria-live="polite"
          className="mt-2 mb-12 text-sm text-rose-500 border border-rose-500 rounded-sm p-2"
        >
          <p className="flex items-center p-1 font-medium rounded-sm" data-testid="error-message">
            {errors[name].message}
          </p>
        </div>
      )}
    </>
  );
};

