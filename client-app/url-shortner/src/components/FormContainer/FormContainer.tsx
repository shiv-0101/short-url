import React from 'react';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';

interface IFormContainerProps {
    updateReloadState: () => void;
}

const FormContainer: React.FC<IFormContainerProps> = (props) => {
  const {updateReloadState } = props;
  const [fullUrl, setFullUrl] = React.useState<string>('');


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await axios.post(`${serverUrl}/shortUrl`, { fullUrl: fullUrl });
        setFullUrl('');
        updateReloadState();
      } catch (error) {
        console.log(error);
      }
    }

    return (
      <div className="container mx-auto p-2">
        <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
          <div className="w-full h-full rounded-xl p-20 backdrop-brightness-50">
            <h2 className="text-white text-4xl text-center pb-4">
              URL Shortner
            </h2>
            <p className="text-white text-center pb-2 text-xl font-extralight">
              Insert your messy link here to shorten it.
            </p>
            <p className="text-white text-center pb-4 text-sm font-thin">
              A free tool to shorten URLs or simplify links. Use our URL
              shortener to create a clean, easy-to-use link.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
                  urlshortner.link /
                </div>
                <input
                  type="text"
                  placeholder="add your link"
                  required
                  className="block w-full p-4 ps-32 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={fullUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFullUrl(e.target.value)
                  }
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  Shorten
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default FormContainer;