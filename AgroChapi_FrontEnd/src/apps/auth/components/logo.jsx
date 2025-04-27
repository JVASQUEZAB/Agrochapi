import React from 'react';

const Logo = () => {
    return (
        <div className="text-center">
          <img src="/Logo.png" alt="Logo" className="w-20 mx-auto" />
          <div className="flex justify-center items-center mt-2 text-white">
            <span className="font-semibold text-3xl">Agro</span>
            <span className="font-light text-3xl ml-1">chapi</span>
          </div>
        </div>
    );
}

export default Logo;