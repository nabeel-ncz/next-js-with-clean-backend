"use client"
import axios from "axios";
import { useState } from "react";

export default function SignupForm() {


    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFormSubmition = () => {
        setLoading(true);
        axios.post('https://localhost:4000/api/user/register', formData, { withCredentials: true })
            .then(() => {
                
            })
            .catch((error) => {
                setError(error?.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <>
            <form onSubmit={handleFormSubmition} className="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8">
                <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold">Name</label>
                    <input value={formData.name} onChange={(event) => {
                        setFormData((state) => ({
                            ...state,
                            name: event.target.value,
                        }));
                    }} className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" type="text" placeholder="name" />
                    <span className="my-2 block"></span>
                </div>
                <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold">Email</label>
                    <input value={formData.email} onChange={(event) => {
                        setFormData((state) => ({
                            ...state,
                            email: event.target.value,
                        }));
                    }} className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" type="email" placeholder="email" />
                    <span className="my-2 block"></span>
                </div>
                <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold">Password</label>
                    <input value={formData.password} onChange={(event) => {
                        setFormData((state) => ({
                            ...state,
                            password: event.target.value,
                        }));
                    }} className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" type="password" placeholder="************" />
                </div>
                <div className="flex items-center">
                    <div className="flex-1"></div>
                    <button className="cursor-pointer rounded bg-blue-600 py-2 px-8 text-center text-lg font-bold  text-white" type="submit">Create account</button>
                </div>
            </form>
        </>
    )
}