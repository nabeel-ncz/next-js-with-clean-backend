import SignupForm from "@/components/user/SingupForm";

export default function Register() {
    return (
        <div className="bg-white h-screen w-screen font-sans text-gray-900">
            <div className="">
                <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                    <div className="mx-2 py-12 text-center md:mx-auto md:w-2/3 md:py-20">
                        <h1 className="mb-4 text-3xl font-black leading-4 sm:text-2xl xl:text-4xl">Sign up</h1>
                    </div>
                </div>
            </div>
            <div className="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
                <SignupForm />
            </div>
        </div>
    )
}