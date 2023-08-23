

function App() {

    function handleSubmit(){

    }

  return (
    <>
        <div className={"bg-mobileBackground bg-primary-red  min-h-screen max-w-screen-sm mx-auto font-Poppins"}>

            <div className={"pt-24 mx-6 space-y-4 pb-14"}>
                <h1 className={"text-[28px]  text-center text-white font-semibold leading-9"}>Learn to code by watching others</h1>
                <p className={"text-center text-[16.1px] text-outline-gray pt-2 leading-[26px]"}>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                    but understanding how developers think is invaluable.
                </p>
            </div>

            <div className={"mx-6 space-y-6"}>

                <div className={"bg-accent-blue py-5 flex items-center justify-center rounded-lg  text-white text-center px-14 shadow-[0px_8px_0px_0px_#00000024]"}>
                    <div className={""}>
                        <span className={"font-semibold"}>Try it free 7 days</span>
                        <span className={"text-outline-gray font-thin"}> then $20/mo. thereafter</span>
                    </div>

                </div>

                <form onSubmit={handleSubmit} className={""}>
                    <div className={"bg-white px-5 rounded-lg space-y-4 first:pt-6 last:pb-6  drop-shadow-2xl shadow-[0px_8px_0px_0px_#00000024]"}>
                        <input className={"border border-outline-gray w-full placeholder-dark-blue p-[.9rem] rounded-lg placeholder:font-medium placeholder:text-[14.5px]"} placeholder={"First Name"} type={"text"} name={"first name"}/>
                        <input className={"border border-outline-gray w-full placeholder-dark-blue p-[.9rem] rounded-lg placeholder:font-medium placeholder:text-[14.5px]"} placeholder={"Last Name"} type={"text"} name={"last name"}/>
                        <input className={"border border-outline-gray w-full placeholder-dark-blue p-[.9rem] rounded-lg placeholder:font-medium placeholder:text-[14.5px]"} placeholder={"Email Address"} type={"email"} name={"email address"}/>
                        <input className={"border border-outline-gray w-full placeholder-dark-blue p-[.9rem] rounded-lg placeholder:font-medium placeholder:text-[14.5px]"} placeholder={"Password"} type={"password"} name={"password"}/>


                        <button type={"submit"} className={"bg-primary-green w-full p-4 rounded-lg  "}>
                            <p className={"uppercase text-[16px] text-white tracking-wider"}>Claim Your Free Trial</p>
                        </button>
                        <div className={""}>
                            <p className={"text-[10.5px] px-8 text-grayish-blue leading-5 text-center"}>
                                By clicking the button, you are agreeing to our <span className={"text-primary-red font-semibold"}>Terms and Services </span>
                            </p>
                        </div>
                    </div>


                </form>

            </div>


        </div>

    </>
  )
}

export default App
