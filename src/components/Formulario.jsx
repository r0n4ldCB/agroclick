import { useForm } from "react-hook-form";

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-white max-w-md w-full p-10 rounded-md">
        <h1 className="text-3xl font-bold my-2">Contactenos</h1>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <span>👤</span>
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre"
              {...register("firstName")}
            />
          </div>
          {errors.firstName && <p>falta el nombre</p>}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <span>📧</span>
            </div>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="email"
              {...register("email", { required: true })}
            />
          </div>
          {errors.lastName && <p>Correo requerido</p>}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <span>✍️</span>
            </div>
            <input
              type="textarea"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Comentario"
              rows="5"
              cols="5"
              {...register("textarea", { pattern: /\d+/ })}
            />
          </div>
          {errors.age && <p>Agregue un comentario</p>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-500 px-4 py-2 rounded-md my-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
export default Formulario;
