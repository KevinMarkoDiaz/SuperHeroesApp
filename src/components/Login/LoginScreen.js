import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleButton = () => {


        history.replace('/');


    };




    return (
        <div>
            <h1 className="container mt-5">Login Screen  </h1>

            <br />

            <button

                className="btn btn-primary"
                onClick={handleButton}


            >

                Iniciar sesion
        </button>



        </div>
    )
}
