import iconError from "./assets/images/icon-error.svg";
import {useFormContext} from "react-hook-form";

const Input = ({placeHolder, inputFieldName, errorMessage}) => {

    const {register, formState} = useFormContext()

    return (<div className={formState.errors?.[inputFieldName] ? "" : "pb-5"}>
            <input
                className={"focus:outline-none focus:border-accent-blue border border-outline-gray w-full placeholder-dark-blue placeholder-opacity-80 p-[.93rem] lg:p-[1.03rem] lg:pl-8 rounded-lg placeholder:font-medium placeholder:font-Poppins font-Poppins font-medium text-[14.5px]  placeholder:text-[14.5px]"}
                placeholder={placeHolder} id={"firstName"} type={"text"} name={"first name"}
                {...register(inputFieldName, {required: true})}
            />
            {formState.errors?.[inputFieldName] && (<>
                    <div className={"text-right text-xs text-primary-red mt-2"} role="alert">{errorMessage}</div>
                    <div
                        className={"relative bottom-[64px] left-[83%] lg:left-[88%]"}>
                        <img src={iconError} alt={""} className={""}/>
                    </div>
                </>)}
        </div>);
};

export default Input;