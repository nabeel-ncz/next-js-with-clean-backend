import { z } from "zod";

export const userRegisterValidator = (
    data: {
        name: string,
        email: string,
        password: string
    }
) => {
    return z.object({
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(6)
    }).safeParse(data);
}