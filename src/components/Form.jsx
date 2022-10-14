import { useState } from "react";

export default function Form({ getData }) {
    const [form, setForm] = useState({
      title: "",
      description: "",
    });


    function handleData(){
        getData(form)
    }
  
    console.log(form);
    return (
      <section className="flex justify-center items-center">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="name"
                    placeholder="Nome da atividade"
                    onChange={(e) => setForm({ ...form, title: e.target.value})}
                  />
                </div>
  
                <div className="mb-6">
                  <textarea
                    id="description"
                    className="form-control h-24 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Descrição"
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                  />
                </div>
  
                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 w-full bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={handleData}
                  >
                    criar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  