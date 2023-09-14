import {FormProvider, useForm} from "react-hook-form";
import Input from "./Input.jsx";
import Submit from "./Submit.jsx";
import Footer from "./Footer.jsx";

const Form = () => {

    const methods = useForm()
    const {register, handleSubmit, formState: {errors},} = methods;

    const onSubmit = (data) => console.log(data)

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className={""}>
                <div
                    className={"bg-white px-5 lg:min-w-[540px] rounded-lg first:pt-6 last:pb-6 drop-shadow-2xl shadow-[0px_8px_0px_0px_#00000024] lg:first:p-10  "}>

                    <Input placeHolder={"First Name"} isRequired={true} inputFieldName={"firstName"}
                           errorMessage={"First Name cannot be empty"}/>
                    <Input placeHolder={"Last Name"} isRequired={true} inputFieldName={"lastName"}
                           errorMessage={"Last Name cannot be empty"}/>
                    <Input placeHolder={"Email Address"} isRequired={true} inputFieldName={"emailAddress"}
                           errorMessage={"Looks like this is not an email"}
                           inputPattern={/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i}/>
                    <Input placeHolder={"Password"} isRequired={true} inputFieldName={"password"}
                           errorMessage={"Password cannot be empty"}/>

                    <Submit/>
                    <Footer/>
                </div>
            </form>
        </FormProvider>
    );
};

export default Form;